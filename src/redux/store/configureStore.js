import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import createRootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage
};

export const history = createBrowserHistory();
const connectRouterHistory = connectRouter(history);

const persistedReducer = persistReducer(
    persistConfig,
    createRootReducer(history) // root reducer with router state
);

function configureStoreProd(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        // Add other middleware on this line...

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
        thunk,
        reactRouterMiddleware,
    ];

    const store = createStore(
        persistedReducer,
        initialState,
        compose(applyMiddleware(...middlewares))
    );

    return {
        store,
        persistor: persistStore(store)
    };
}

function configureStoreDev(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        // Add other middleware on this line...
        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
        thunk,
        reactRouterMiddleware,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(
        persistedReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(connectRouterHistory(nextRootReducer));
        });
    }

    return {
        store,
        persistor: persistStore(store)
    };
}


const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;