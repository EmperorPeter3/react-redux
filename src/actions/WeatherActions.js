import { GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS } from '../constants/Weather'

export function getWeather(city) {

  var url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q='
  var apiKey = '&APPID=c342d788c125de8dc74351db9d754172'
  

  return (dispatch) => {
    
    dispatch({
      type: GET_WEATHER_REQUEST,
      payload: {}
    })

    fetch(url+city+apiKey)
      .then(function(response) {
        console.log(response.headers.get('Content-Type'));
        console.log((response.status));

        return response.json()
       })
      .then(function(weather) {
        dispatch({
          type: GET_WEATHER_SUCCESS,
          payload: weather
        })
      })
      .catch( alert );
  }

}