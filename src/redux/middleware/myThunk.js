
function myThunk(dispatch){
    return(next)=>{
        return(action)=>{
            if(typeof action === 'function'){
                return action(dispatch);
            }
            return next(action);
        }
    }
}

export default myThunk;
