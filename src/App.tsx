import React from 'react';
import './App.css';
import DashboardContainer from "./Container/DashboardContainer";
import TopMenuContainer from "./Container/TopMenuContainer";
import { Switch, Route } from "react-router";
import PortfolioContainer from "./Container/PortfolioContainer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopMenuContainer/>
        <Switch>
          <Route exact path="/" component={DashboardContainer}/>
          <Route exact path="/portfolio" component={PortfolioContainer}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
