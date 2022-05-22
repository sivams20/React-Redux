function testMiddleware(store){
    return(next)=>{
        return(action)=>{
            console.log('Hello', action);
            next(action);
        }
    }
}

export default testMiddleware;