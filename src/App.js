import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Books from "./pages/books/Books";
import Product from "./product/Product";
import Templates from "./pages/templates/Templates";
import Pricing from "./pages/pricing/Pricing"; 
import Customers from "./pages/customers/Customers"; 
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Product />
          </Route>
          <Route exact path="/templates">
            <Templates />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/customers">
            <Customers />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
