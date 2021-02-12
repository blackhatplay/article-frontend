import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "./components/Article";
import Editor from "./components/Editor";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Editor} />
        <Route path="/:slug" exact component={Article} />
      </Switch>
    </Router>
  );
}

export default App;
