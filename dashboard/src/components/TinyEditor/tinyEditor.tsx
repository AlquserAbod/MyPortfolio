import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TinyMCEEditorProps {
  initialValue?: string;
  onChange?: (content: string, editor: any) => void;
}

const TinyMCEEditor: React.FC<TinyMCEEditorProps> = ({ initialValue = '', onChange }) => {
  const editorRef = useRef<any>(null);



  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setContent(initialValue);
    }
  }, [initialValue]);

  const handleEditorChange = (content: string, editor: any) => {
    if (onChange) {
      onChange(content, editor);
    }
  };




  return (
    <Editor
      apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      onInit={(evt, editor) => {
        editorRef.current = editor;
        editorRef.current.setContent(initialValue);
      }}
      initialValue={initialValue}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'help', 'wordcount',  'emoticons', 'codesample', 'file-manager'
        ],
        Flmngr: {
          apiKey: import.meta.env.VITE_FLMNGR_API_KEY 
        },
        external_plugins: {
          'file-manager': '/flmngr-tinymce/plugins/file-manager/plugin.min.js'
        },
        toolbar: 'undo redo | blocks |' +
        'bold italic backcolor | alignleft aligncenter alignright alignjustify |'  +
        "image media table"
        +'| bullist numlist outdent indent | ' +
        'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
      }}
      
      onChange={handleEditorChange as any}
    />
  );
};

export default TinyMCEEditor;
