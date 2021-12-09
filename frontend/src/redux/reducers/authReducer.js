const initialState =  {
    state:[],
    user:[],
    email:{email:""},
}

const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case "NEW_USER":
            return{
                ...state,
                user:action.payload
            }
        case "SIGN_USER":
            return{
                ...state,
               email: action.payload
            }
            default:
                return state

    }
}

export default authReducer