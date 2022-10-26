const reducer=(state=0,action)=>{
    switch (action.type){
        case "add":
            return state+action.payload;
        case "minus":
            return state-action.payload;
        default:
            return state;
    }
}

export default reducer;