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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users/:userId">
            <UserDetails />
          </Route>
          <Route path="/users/:name?">
            <SearchTable />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
