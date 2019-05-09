import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter , Route } from 'react-router-dom';
import ItemStatusFilter from './components/item-status-filter';

ReactDOM.render(
<BrowserRouter>
    <Route path="/" component={App} />
</BrowserRouter>,
document.getElementById('root'));


serviceWorker.unregister();
