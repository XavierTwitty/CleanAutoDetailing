import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";
import Services from "./Services";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route>
          <Home />
        </Route>
        <Route>
          <Navigation />
        </Route>
        <Route>
          <Services />
        </Route>
        <Route>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
