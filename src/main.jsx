import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
// 기본형태
// import App from './App.jsx';
// Context API 적용 후
import App from './App2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
