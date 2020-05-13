import React from "react";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/homepage"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Technologies from "./pages/technologiesUsed"

function App() {
  return (
    //no match must be last
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path = "/technologies" component = {Technologies}/>
          <Route exact path = "*" component = {NoMatch}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
