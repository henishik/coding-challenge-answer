import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';

export default function configureStore() {
    const initialState = {
        reports: []
    };

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            promiseMiddleware
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
