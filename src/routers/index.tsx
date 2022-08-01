import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import App from './app.routes';

const RoutesApp: React.FC =  ( ) => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

export default RoutesApp;