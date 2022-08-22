import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './app/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
		<Provider store={store}>
      <Router>
    	 <App />
      </Router>
		</Provider>
  </React.StrictMode>
);
reportWebVitals();
