import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');

function reducer(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer,
    routing: routerReducer
});

export default rootReducer;
