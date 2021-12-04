import {combineReducers} from 'redux';
import citiesReducer from './citiesReducer'

const mainReducer = combineReducers({
    citiesReducer: citiesReducer,
})

export default mainReducer