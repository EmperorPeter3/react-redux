import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'
import * as weatherActions from '../actions/WeatherActions'
import Weather from '../components/Weather'

function mapStateToProps (state) {
  return {
    year: state.page.year,
    photos: state.page.photos,
    photosFetching: state.page.photosFetching,
    weather: state.weather
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    weatherActions: bindActionCreators(weatherActions, dispatch)
  }
}

class Page extends Component {

  onYearBtnClick(event) {
    this.props.getPhotos(+event.target.innerText)
  }

  render() {
    const { year, photos, photosFetching, ...weatherData } = this.props

    return (
      <div className='pageBlock'>
          
        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2016</button>
        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2015</button>
        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2014</button>

        <div>
          {this.props.children}
        </div>
        
        <h3>{year} год</h3>
        {
          photosFetching ?
          <p>Загрузка...</p>
          :
          <p>У тебя {photos.length} фото.</p>
        }
        
        <Weather weatherData={weatherData} />

      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number,
  photos: PropTypes.array,
  photosFetching: PropTypes.bool,
  weather: PropTypes.shape({
      weather: React.PropTypes.object,
      weatherFetching: React.PropTypes.bool
    })
}



export default connect(mapStateToProps, mapDispatchToProps)(Page)

// ::obj.method ≡ obj.method.bind(obj)
// (...args) => this.handleStuff('stuff', ...args) ≡ this.handleStuff.bind(this, 'stuff')