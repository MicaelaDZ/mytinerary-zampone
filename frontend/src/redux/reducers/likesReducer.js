const initialState = {
    state: [],
    likes:[]
  };
  
  const likesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LIKE":
        return {
          ...state,
          likes: action.payload,
        };
   
  
      default:
        return state;
    }
  };
  
  export default likesReducer;
  