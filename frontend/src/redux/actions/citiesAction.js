import axios from 'axios';


const citiesAction = {
    getCities: () => {
        return async (dispatch, getState) => {
          let response = await axios.get("https://mytinerary-zampone.herokuapp.com/api/cities")
          dispatch({
            type: "GET_ALL_CITIES",
            payload: response.data.response,
          })
        }
      },
      filter: (cities, value)=>{
        return (dispatch,getState)=>{
            dispatch({type:'FILTER', payload:{cities, value}})
        }
      },
      findCity: (cities,id) => {
        return (dispatch, getState) =>  {
          dispatch({type: 'FIND_A_CITY', payload: {cities, id}})
        }
      },
}

export default citiesAction