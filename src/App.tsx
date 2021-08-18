import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouterContainer from "./components/RouterContainer/RouterContainer";

// const App = (props: RouteComponentProps<{}>) => {

const App = () => {
  return (
    <Router>
      <RouterContainer />
    </Router>
  );
};
export default App;
