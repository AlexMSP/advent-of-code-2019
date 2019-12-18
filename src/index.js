import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import _ from "lodash";
import Nav from "./components/Nav";
import Components from "./Components";
import "./styles.css";
import Home from "./components/Home";

function App() {
  const dayNumbers = _.range(1, 32);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            {Home}
          </Route>
          {dayNumbers.map(dayNumber => {
            const path = "/day" + dayNumber;
            return (
              <Route key={dayNumber} path={path}>
                {Components(dayNumber)}
              </Route>
            );
          })}
          <Route render={() => <h3>Not found!</h3>} />
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
