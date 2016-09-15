import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
//import App from './containers/App'
//import './styles/app.css'
import configureStore from './store/configureStore'

import { Router, Route, Link, browserHistory } from 'react-router'

import User from './components/User'
import Page from './components/Page'


const store = configureStore()

// render(
//     <Provider store={store}>
//         <div className='app'>
//             <App />
//         </div>
//     </Provider>,
//     document.getElementById('root')
//     )



class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
            <ul>
                <li><Link to='/user' activeClassName='active'>User</Link></li>
                <li><Link to='/page' activeClassName='active'>Page</Link></li>
            </ul>
            {this.props.children}
          </div>
      </Provider>
    )
  }
}

class Child extends Component {
    render() {
        return (
            <div onClick={() => this.props.doSomething(this.props.value)}>Click Me</div>
            )
    }
}


render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
        <Route path='user' component={User} >
            <Route path='child' component={Child} />
        </Route>
        <Route path='page' component={Page}/>
    </Route>
  </Router>
), document.getElementById('root'))