import React from "react";
import { useDispatch, useSelector} from 'react-redux';
import{ increment, decrement, reset } from '../redux/store';

function Counter(){

    const value = useSelector((state)=>{
        return state.value;
    });

    const dispatch = useDispatch();

    console.log(value);
    return(
        <div>
            <button onClick={()=>{
                dispatch(increment())
            }}>Increment</button>
            <button onClick={()=>{
                dispatch(decrement())
            }}>Decrement</button>
            <button onClick={()=>{
                dispatch(reset())
            }}>Reset</button>
            <div>
            <label>{value}</label>
            </div>
        </div>
    )
}

export default Counter;
