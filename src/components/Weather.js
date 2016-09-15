import React, { Component } from 'react'


export default class Weather extends Component {

    state = {city: ''}

    handleCityChange = event => this.setState({city: event.target.value})

    getWeatherByCity = () => {
        const { weatherData: {weatherActions: {getWeather}}} = this.props
        return getWeather && getWeather(this.state.city)
    }

    render() {
        const hpaCoef = 0.750062
        const { weatherData: {weather: {weather,weatherFetching}}} = this.props
        console.log(this.props);

        return (
            <div className='weatherBlock'>
                <h3>Узнать погоду в городе</h3>
                <form  name='myForm'>
                    <input className='inp' type='text' value={this.state.city} onChange={this.handleCityChange} />
                    <input className='btn' type='button' value='Прогноз' onClick={this.getWeatherByCity} />
                </form>
                {
                  weatherFetching ?
                  <p>Загрузка...</p>
                  :
                  <div>
                      <p>{weather.weather[0].main} : {weather.weather[0].description}</p>
                      <p>Температура: {weather.main.temp} гр. Цельсия </p>
                      <p>Влажность: {weather.main.humidity}% </p>
                      <p>Давление: {+weather.main.pressure * hpaCoef} мм рт ст </p>
                      <p>Скорость ветра: {weather.wind.speed} м/с </p>
                  </div>
                }
            </div>
        )
    }

}

