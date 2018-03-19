import React, { Component } from 'react'
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router'

import './main.scss'

import HotelInfo from './components/HotelInfo'
import WhereTo from './components/WhereTo'
import DummyRSVP from './components/DummyRSVP'
import Invitation from './components/Invitation'
import Transportation from './components/Transportation'
import About from './components/About'
import Weather from './components/Weather'

const App = props => {
  return(

    <Router history={browserHistory}>
      <Route
        path='/'
        component={WhereTo}
      />
      <Route
        path='/wedding/invitation'
        component={Invitation}
      />
      <Route
        path='/wedding/checkbacksoon'
        component={DummyRSVP}
      />
      <Route
        path='/wedding/location'
        component={HotelInfo}
      />
      <Route
        path='/wedding/transportation'
        component={Transportation}
      />
      <Route
        path='/wedding/weather'
        component={Weather}
      />
      <Route
        path='/coolsite!'
        component={About}
      />
    </Router>
  )
}

export default App
