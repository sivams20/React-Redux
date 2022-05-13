import { createStore } from 'redux';

const initialState = {
    value: 0    
};

function appReducer(prevState = initialState, action){
    console.log()
    switch(action.type){
        case 'increment':
            return{
                ...prevState,
                value: prevState.value + 1
            }
        case 'decrement':
            return{
                ...prevState,
                value: prevState.value - 1
            }
        case 'reset':
            return initialState;
        default:
            return initialState;
    }
}

const store = createStore(appReducer);

export default store;
