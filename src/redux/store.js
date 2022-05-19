import { createStore, combineReducers } from 'redux';

const initialState = {
    value: 0    
};

const appReducer = combineReducers({
    value
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

const store = createStore(appReducer);

export default store;

export{ increment, decrement, reset };
