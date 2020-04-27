import * as types from '../../constants/actionTypes';

const setCount = (count) => ({
    type: types.ACTION_TYPE_2,
    count
});

// example of a thunk using the redux-thunk middleware
const setUniqueId = () => ({
    type: types.ACTION_TYPE_1,
    id: Math.floor(Math.random() * 10000000)
});

export default { setCount, setUniqueId };