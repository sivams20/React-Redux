import React, { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
// import{ increment, decrement, reset } from '../redux/store';
import { increment, decrement, reset } from "../redux-toolkit/valueReducer";
import getDataInfo from "../redux/api";


function Counter(){

    const dispatch = useDispatch();
    const value = useSelector((state)=>{
        return state.value;
    });
    //const users = useSelector(state => state.dataInfo.data);
    //const loading = useSelector(state => state.dataInfo.loading);
    //const error = useSelector(state => state.dataInfo.error);
    useEffect(() => {
        //getDataInfo(dispatch);
        dispatch(getDataInfo(dispatch));
      },[dispatch])

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
            {/* <div>
            {loading && <div>Loading...</div>}
            {users && users.map((user) =>
                <div key={user.id}>
                {user.name}
                </div>
            )}
            </div> */}
        </div>
    )
}

export default Counter;
