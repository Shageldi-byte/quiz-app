export const decreament=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"minus",
            payload:amount
        })
    }
}

export const increament=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"add",
            payload:amount
        })
    }
}