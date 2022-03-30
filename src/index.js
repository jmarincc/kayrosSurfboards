import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';


/**
 * Connect the app to the browser's URL
 */


ReactDOM.render(<Router><App/></Router>, document.getElementById('root')
);


