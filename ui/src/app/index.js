import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './configureStore';
import RootContainer from './component/organism/rootContainer';
import MainScreen from './component/organism/MainScreen';
import '../sass/main.scss';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={RootContainer}>
                <IndexRoute component={MainScreen} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
