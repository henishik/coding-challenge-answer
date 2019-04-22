import { RECIEVE_INITIAL_DATA, RESOLVE_REPORT, BLOCK_REPORT } from '../action';
import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');

function reports(state = {}, action) {
    switch (action.type) {
        case RECIEVE_INITIAL_DATA:
            let nextState = action.data
            return nextState;
        case RESOLVE_REPORT:
            return state;
        case BLOCK_REPORT:
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reports,
    routing: routerReducer
});

export default rootReducer;
