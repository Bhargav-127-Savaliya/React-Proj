// 19:20
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
// actin name constants
const INIT = 'INIT';
const INC = 'INCREMENT';
const DEC = 'DECREMENT';
const INC_BY_AMT = 'INCREMENT_BY_AMOUNT';
// store 
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));
const history = [];
// reducer
function reducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case INIT:
            return { amount: action.payload };
        case INC:
            return { amount: state.amount + 1 };
        case DEC:
            return { amount: state.amount - 1 };
        case INC_BY_AMT:
            return { amount: state.amount + action.payload };
        default:
            return state;
    }
}
//global state
// store.subscribe(()=>{
//     history.push(store.getState());
//     console.log(history);
//     // console.log(store.getState());
// })


// Action creators
function getUser(id) {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`http://localhost:3005/accounts/${id}`);
        dispatch(initUser(data.amount));
    }
}
function initUser(value) {
    return { type: INIT, payload: value };
}
function increment() {
    return { type: INC };
}
function decrement() {
    return { type: DEC };
}
function incrementByAmount(amount) {
    return { type: INC_BY_AMT, payload: amount };
}
// dispatch
setTimeout(() => {
    store.dispatch(getUser(2));
}, 2000)
