import { createStore, combineReducers, applyMiddleware } from 'redux';
import testMiddleware from './middleware/testMiddleware';

const initialState = {
    value: 0    
};

const appReducer = combineReducers({
    value,
    dataInfo
});

function value(prevState = 0, action){
    switch(action.type){
        case 'increment':
            return prevState + 1
        case 'decrement':
            return prevState - 1
        case 'reset':
            return initialState.value;
        default:
            return initialState.value;
    }
}

function dataInfo(state = {
    data: [],
    error: '',
    loading: false
}, action){
    switch(action.type){
        case 'set-data': 
            return{
                ...state,
                data: action.payload
            }
        case 'loading':
            return{
                ...state,
                loading: action.payload 
            }
        case 'error':
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;

    }
}

/* Actions for counter */
function increment(){
    return{
        type: 'increment'
    }
}

function decrement(){
    return{
        type: 'decrement'
    }
}

function reset(){
    return{
        type:'reset'
    }
}

/* Actions for data info */

function setData(data){
    return{
        type: 'set-data',
        payload: data
    }
}

function setLoading(loading){
    return{
        type: 'loading',
        payload: loading
    }
}

function setError(error){
    return{
        type: 'error',
        payload: error
    }
}

const store = createStore(appReducer, applyMiddleware(testMiddleware));

export default store;

export{ increment, decrement, reset, setData, setLoading, setError };
