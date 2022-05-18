import { createStore } from 'redux';

const initialState = {
    value: 0    
};

function appReducer(prevState = initialState, action){
    return{
        value: valueReducer(prevState.value, action)
    };
}

function valueReducer(prevState = 0, action){
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

const store = createStore(appReducer);

export default store;
