import React from "react";
import "./App.css";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Pages
import Home from "./components/Pages/Home";
import Shopping from "./components/Pages/Shopping";

function App() {
  return (
    <div className="App">
      <Router>
        <PageWrapper>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/shopping" component={Shopping} />
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
