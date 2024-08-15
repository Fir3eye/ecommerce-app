// src/index.js
import React from 'react';           // Importing React library to use React features.
import ReactDOM from 'react-dom';    // Importing ReactDOM to render React components into the DOM.
import './index.css';               // Importing a CSS file for global styles.
import App from './App';            // Importing the main App component.

ReactDOM.render(<App />, document.getElementById('root'));  // Rendering the App component inside the <div id="root"></div> element in the HTML.
