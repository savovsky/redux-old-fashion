import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';

import configureStore from './store/configureStore';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </React.StrictMode>,
);
