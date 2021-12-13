const initialState = {
  state: [],
  newUser: { name: "" }, //para que lea en navigation esta prop
  //    user:{}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_USER":
     
      return {
        ...state,
        newUser: action.payload
      };
      // case "SIGN_IN":
      //   return{
      //     ...state,

      //   }
    case "SIGN_OUT":
      localStorage.clear();
      return {
        ...state,
        token: null,
        errores: null,
        toastShowed: false,
        ...action.payload,
      };
    // case "SIGN_USER":
    //     return{
    //         ...state,
    //        user: action.payload
    //     }
    default:
      return state;
  }
};

export default authReducer;
