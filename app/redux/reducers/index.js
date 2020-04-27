import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import homeReducer from './home';
import authReducer from './auth';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    home: homeReducer,
});

export default rootReducer;