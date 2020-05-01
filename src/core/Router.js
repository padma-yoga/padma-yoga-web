import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from 'pages/About'
import Contact from 'pages/Contact'
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
      <Route path="*" component={(props) => <PageNotFound {...props} />} />
    </Switch>
  )
}

export default Router
