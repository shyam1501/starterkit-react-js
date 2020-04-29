import * as types from '../../constants/actionTypes';
import AuthService from '../../services/sampleService';

const setAuth = (isAuthorized) => ({
    type: types.SET_AUTH,
    isAuthorized
});


// example of a thunk using the redux-thunk middleware
const initAuth = () => {
    return (dispatch) => {
        // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
        // in this case at this point we could call a service that would persist the auth state
        AuthService.postAuth({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }).then(
            setTimeout(
                () => { dispatch(setAuth(true)); },
                2000
            )
        ).catch(e => { console.log("Auth failed with an error: ", e); });

    };
};

export default { initAuth };