import React, { useEffect, useState, useRef, ReactNode } from 'react';
import { register } from 'swiper/element/bundle';

interface SwiperProps {
  children: ReactNode[];
  virtual?: boolean;
  direction?: 'horizontal' or 'vertical';
  [key: string]: any;
}

interface VirtualData {
  from: number;
  to: number;
  offset: number;
  slides: ReactNode[];
}

export function Swiper(props: SwiperProps) {
  const swiperRef = useRef<any>(null);
  const { children, virtual, ...rest } = props;

  const [virtualData, setVirtualData] = useState<VirtualData>({
    from: 0,
    to: 0,
    offset: 0,
    slides: [],
  });

  useEffect(() => {
    register();

    const params = {
      ...rest,
    };

    if (virtual) {
      params.virtual = {
        enabled: true,
        slides: children,
        renderExternal(vd: VirtualData) {
          setVirtualData(vd);
        },
      };
    }

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, [children, rest, virtual]);

  const slides = virtual
    ? virtualData.slides.map((slide, index) =>
        React.cloneElement(slide as React.ReactElement, {
          key: virtualData.from + index,
          style: {
            [props.direction === 'vertical' ? 'top' : 'left']: virtualData.offset,
          },
          'data-swiper-slide-index': virtualData.from + index,
        })
      )
    : children;

  return <swiper-container init="false" ref={swiperRef}>{slides}</swiper-container>;
}

interface SwiperSlideProps {
  children: ReactNode;
  [key: string]: any;
}

export function SwiperSlide(props: SwiperSlideProps) {
  const { children, ...rest } = props;

  return <swiper-slide {...rest}>{children}</swiper-slide>;
}
