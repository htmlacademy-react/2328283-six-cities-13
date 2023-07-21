import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const OFFERS_COUNT = 5;

root.render(
  <React.StrictMode>
    <App countOffers={OFFERS_COUNT} />
  </React.StrictMode>
);
