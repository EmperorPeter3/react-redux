import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import User from '../components/User'
import Page from '../components/Page'

import * as pageActions from '../actions/PageActions'
import * as weatherActions from '../actions/WeatherActions'

class App extends Component {
  render() {
    const { user, page, weather } = this.props
    const { getPhotos } = this.props.pageActions
    const { getWeather } = this.props.weatherActions


    return <div>
    <User name={user.name} surname={user.surname}/>
    <Page 
      photos={page.photos} 
      year={page.year} 
      photosFetching={page.photosFetching} 
      getPhotos={getPhotos} 
      weather={weather}
      getWeather={getWeather}
    />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page,
    weather: state.weather
  }
}

/*
bindActionCreators - Преобразует объект, значениями которого 
являются генераторы действий, в объект с теми же ключами, но 
генераторами действий, обернутыми в вызов dispatch, т.ч. 
они могут быть вызваны напрямую.
*/

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    weatherActions: bindActionCreators(weatherActions, dispatch)
  }
}

/*
connect, первым аргументом принимает "маппинг" 
(соответствие) state к props, а вторым маппинг dispatch к props
*/
export default connect(mapStateToProps, mapDispatchToProps)(App)