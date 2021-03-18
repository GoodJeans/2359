import React from "react"
import {
  BrowserRouter, Switch, Route, Redirect
} from "react-router-dom";
import Favourites from './Favourites'
import Search from './Search'
import './App.css';
import Panel from './Panel'
function App() {

  return (

    <BrowserRouter>
      <Panel />
      <Switch>
        <Route path="/Search" component={Search} />
        <Route path="/Favourites" component={Favourites} />
        <Redirect path="/" component={Favourites} />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
