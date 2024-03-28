import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Book from "./pages/book/Book"; 
import Product from "./product/Product";
import Templates from "./pages/templates/Templates";
import Pricing from "./pages/pricing/Pricing"; 
import Customers from "./pages/customers/Customers"; 

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
          <Route exact path="/book">
            <Book />
          </Route>
          <Route exact path="/login">
            <login/>
          </Route>
          <Route exact path="/signup">
            <signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
