import React, { Component } from 'react'
import { Route, Link, Switch, NavLink, BrowserRouter } from 'react-router-dom'
import { map } from 'ramda'
import Home from './pages/home'
import About from './pages/about'
import { connect } from 'react-redux'
import style from './App.css'

const createNavLink = ({ url, description }) => {
  return (
    <NavLink
      exact
      activeClassName="ph2"
      className="ph2 pv1 link br2 mh2 near-black hover-black-60"
      to={url}
    >
      {description}
    </NavLink>
  )
}

const menuItems = [
  {
    url: '/',
    description: 'Home'
  },
  {
    url: '/about',
    description: 'About'
  }
]

const Menu = () => (
  <nav className="pa3 pa4-ns tc link">
    <div>{map(createNavLink, menuItems)}</div>
  </nav>
)

const App = props => {
  return (
    <BrowserRouter>
      <div className="avenir flex flex-column ">
        <header className="tracked tc fl w-100 dib bg-near-black yellow ">
          <div className="animated headShake infinite sunglasses dib mr4" />
          <h1 className="dib">{props.title}</h1>
          <div className="animated headShake infinite delay sunglasses dib ml4" />
        </header>
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const connector = connect(state => ({ title: state.title }))

export default connector(App)
