const initialState = {
  state: [],
  itineraries: [],
  isLoading: true,
  comments: [],
};

const itinerariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITINERARY_BY_CITY_ID":
      return {
        ...state,
        itineraries: action.payload.response,
        isLoading: action.payload.loading,
      };
    case "SET_LOAD":
      return {
        ...state,
        isLoading: action.payload,
      };
     case "COMMENTS":
      return {
        ...state,
        comments: action.payload,
      };
         default:
      return state;
  }
};

export default itinerariesReducer;
