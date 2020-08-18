import React from "react";
import Home from "./pages/hompage/homepage"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Technologies from "./pages/technology/technologiesUsed"

function App() {
  return (
    //no match must be last
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path = "/technologies" component = {Technologies}/>
          <Route exact path = "*" component = {Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
