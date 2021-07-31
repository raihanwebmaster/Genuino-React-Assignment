import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import SearchTable from "./pages/SearchTable";
export const UserContext = createContext();

function App() {
  const [findData, setFindData] = useState([]);
  return (
    <UserContext.Provider value={[findData, setFindData]}>
      <Router>
        <Switch>
          <Route path="/user/:name">
            <SearchTable />
          </Route>
          <Route path="/users/:userId">
            <UserDetails />
          </Route>
          <Route  path="/users/:page?">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
