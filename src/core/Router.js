/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Register from 'pages/Register'
import Users from 'pages/Users'
import UnderConstruction from 'pages/UnderConstruction'
import PageNotFound from 'pages/PageNotFound'

function Router() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={(props) => <UnderConstruction {...props} />}
      />
      <Route path="/about" component={(props) => <About {...props} />} />
      <Route path="/contact" component={(props) => <Contact {...props} />} />
      <Route path="/register" component={(props) => <Register {...props} />} />
      <Route path="/users" component={(props) => <Users {...props} />} />
      <Route path="*" component={(props) => <PageNotFound {...props} />} />
    </Switch>
  )
}

export default Router
