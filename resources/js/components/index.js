import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
ReactDOM.render(
  <Suspense fallback={loading()}>
    <App />
  </Suspense>,
  document.getElementById('root')
);