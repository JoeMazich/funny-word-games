import * as React from "react";
import logo from "./styles/svg/logo.svg";
import "./styles/App.scss";
import AppBar from "./components/header/ResponsiveAppBar";
import Router from "./components/common/Router";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Router />
    </div>
  );
}

export default App;
