import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import './index.css';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';


ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </CookiesProvider>,
    document.getElementById('root')
);