import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

//Browser Router is an application that is going to wrap around our application
//provides functionality of routing

ReactDOM.render(//BrowserRouter provides all routing capabilities
        <BrowserRouter>
            <App />
        </BrowserRouter>, 
        document.getElementById('root'));


