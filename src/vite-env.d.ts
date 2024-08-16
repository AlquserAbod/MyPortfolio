/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_EMAIL_USER: string;
  readonly VITE_EMAIL_PASS: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
