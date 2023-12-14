import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Home from "./components/Home";
import Card from "./components/Card";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/:user" component={Card} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
