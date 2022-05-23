import axios from "axios";
import { setData, setLoading } from "./store";

function getDataInfo(dispatch){
    return function (){
        dispatch(setLoading(true));
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response);
            dispatch(setData(response.data));
            dispatch(setLoading(false));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(setLoading(false));
        });
    }
}

export default getDataInfo;