import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-dom';
import {createStore} from 'redux';


import App from './components/App';
import reducers from './reduces';

ReactDOM.render(
    <Provider store={createStore(reducers)} />,
    <App />,
    document.getElementById('root')
)