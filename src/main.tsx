import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/index.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from '@/utils/i18n.ts';
import { I18nextProvider } from 'react-i18next';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n} >
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
