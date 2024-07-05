import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TinyMCEEditorProps {
  initialValue?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (content: string) => void;
  onSave?: (content: string) => void;
}

const TinyMCEEditor = forwardRef<any, TinyMCEEditorProps>(
  ({ initialValue = '', onChange, onSave, error = false, helperText = '' }, ref) => {
    const editorRef = useRef<any>(null);
    const [currentError, setCurrentError] = useState(error);
    const [currentHelperText, setCurrentHelperText] = useState(helperText);

    useEffect(() => {
      if (editorRef.current) {
        editorRef.current.setContent(initialValue);
      }
    }, [initialValue]);

    useEffect(() => {
      setCurrentError(error);
      setCurrentHelperText(helperText);
    }, [error, helperText]);

    const handleEditorChange = (content: string) => {
      if (onChange) {
        onChange(content);
      }
    };

    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(editorRef.current);
        } else {
          ref.current = editorRef.current;
        }
      }
    }, [ref]);

    
    return (
      <div>
        <div style={error ? {border: "1px solid red", borderRadius: "5px", padding: '2px'} : {}}>
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            onInit={(evt, editor) => {
              editorRef.current = editor;
              editorRef.current.setContent(initialValue);
            }}
            initialValue={initialValue}
            init={{
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'help', 'wordcount', 'emoticons', 'codesample', 'file-manager', 'save'
              ],
              toolbar_mode: 'wrap',
              toolbar: 'undo redo | blocks |' +
              'bold italic backcolor | alignleft aligncenter alignright alignjustify |' +
              'image media table  bullist numlist outdent indent | ' +
              'removeformat help save',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
              Flmngr: {
                apiKey: import.meta.env.VITE_FLMNGR_API_KEY
              },
              external_plugins: {
                'file-manager': '/flmngr-tinymce/plugins/file-manager/plugin.min.js'
              },
              save_onsavecallback: (editorRef: any) => {
                if(onSave) {
                  onSave(editorRef.getContent());
                }
                
              }
            }}
            onEditorChange={handleEditorChange as any}
          />
        </div>
        {currentHelperText && (
          <div style={{ color: currentError ? 'red' : 'inherit', marginLeft: "8px" }}>
            {currentHelperText}
          </div>
        )}
      </div>
    );
  }
);

export default TinyMCEEditor;
