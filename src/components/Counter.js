import React from "react";
import { useDispatch, useSelector} from 'react-redux';

function Counter(){

    const value = useSelector((state)=>{
        return state.value;
    });

    const dispatch = useDispatch();

    console.log(value);
    return(
        <div>
            <button onClick={()=>{
                dispatch({
                    type: 'increment'
                })
            }}>Increment</button>
            <button onClick={()=>{
                dispatch({
                    type: 'decrement'
                })
            }}>Decrement</button>
            <button onClick={()=>{
                dispatch({
                    type:'reset'
                })
            }}>Reset</button>
            <div>
            <label>{value}</label>
            </div>
        </div>
    )
}

export default Counter;
