import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

/**
 * Ponto de entrada principal da aplicação React.
 *
 * - `ReactDOM.createRoot`: Inicializa a renderização da aplicação React no DOM.
 * - `React.StrictMode`: Envolve o componente principal para ativar verificações adicionais em desenvolvimento.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente principal da aplicação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
