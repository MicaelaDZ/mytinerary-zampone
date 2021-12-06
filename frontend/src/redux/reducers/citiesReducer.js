//reducer modifica los estados llamando a una action "type"

const initialState = {
    state: [],
    cities: [],
    auxiliar: [],
    city: [],
    
    
  }
  
  const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ALL_CITIES":
        return {
          ...state,
          cities: action.payload, //a citis le ejcuta una accion
          auxiliar: action.payload,
         
        }
        case 'FILTER':
          const filtered = action.payload.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.value.toLowerCase())))
          return {
              ...state,
              auxiliar: filtered,
              }
          case 'FIND_A_CITY':
            const city = action.payload.cities.find(city => city._id === action.payload.id)
            return{
              ...state,
              city: city
            }
                
      default:
          return state
    }
    
  }
  
  export default citiesReducer