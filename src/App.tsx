import React from 'react';
import './App.css';
import DashboardContainer from "./Container/DashboardContainer";
import TopMenuContainer from "./Container/TopMenuContainer";
import { Switch, Route, Redirect } from "react-router";
import PortfolioContainer from "./Container/PortfolioContainer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopMenuContainer/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/my-portfolio/home"/>
          </Route>
          <Route exact path="/my-portfolio" component={DashboardContainer}/>
          <Route exact path="/my-portfolio/home" component={DashboardContainer}/>
          <Route exact path="/my-portfolio/portfolio" component={PortfolioContainer}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
