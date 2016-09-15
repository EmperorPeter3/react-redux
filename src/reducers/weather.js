import { GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS } from '../constants/Weather'

const initialState = {
  weather: {},
  weatherFetching: true
}

export default function page(state = initialState, action) {
  switch (action.type) {

    case GET_WEATHER_REQUEST:
        return { ...state, weather: action.payload, weatherFetching: true }

    case GET_WEATHER_SUCCESS:
        return { ...state, weather: action.payload, weatherFetching: false } 

    default:
        return state;
    }
}