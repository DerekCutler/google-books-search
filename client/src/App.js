import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";
import Books from "./pages/Books";


function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
          <Switch>
            <Route exact path= "/" component={Books} />
          </Switch>
      </div>
    </Router>
    );
}

export default App;