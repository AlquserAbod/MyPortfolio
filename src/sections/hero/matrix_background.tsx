import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/sections/hero/matrixBackground.module.scss";

const MatrixBackground = ({ children }: { children: JSX.Element }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [fontSize, setFontSize] = useState(20);

  const matrixCharacters = "010101010101010101010101010101";
  const matrixSpeed = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parentElement = canvas.parentElement;
      if (parentElement) {
        const parentWidth = parentElement.clientWidth;
        const parentHeight = parentElement.clientHeight;

        const width = parentWidth;
        let height: number;

        if (window.innerWidth <= 600) {
          height = parentHeight;
        } else {
          height = (parentWidth * 9) / 16;
        }

        canvas.width = width;
        canvas.height = height;
        setCanvasDimensions({ width, height });

        if (window.innerWidth <= 400) {
          setFontSize(15);
        } else {
          setFontSize(20);
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Matrix characters
    const matrix = matrixCharacters.split("");
    const columns = Math.floor(canvasDimensions.width + 20 / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    
    const draw = () => {
      ctx.fillStyle = styles.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = styles.textColor;
      ctx.font = `${fontSize}px ${styles.fontFamily}`;
  
      drops.forEach((y, x) => {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, x * fontSize, y * fontSize);
  
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[x] = 1;
        }
  
        drops[x]++;
      });
    };

    const interval = setInterval(draw, matrixSpeed);
    return () => {
      clearInterval(interval);
    };
  }, [canvasDimensions, fontSize]);

  return (
    <div className={styles.matrixContainer}>
      <canvas ref={canvasRef} className={styles.backgroundCanvas}></canvas>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};

export default MatrixBackground;
