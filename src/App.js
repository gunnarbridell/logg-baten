import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./App.css";
import Navigator from "./components/Navigator.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

document.addEventListener("DOMContentLoaded", function () {
  //Navigator
  const elems = document.querySelectorAll(".sidenav");
  const options = { edge: "left" };
  M.Sidenav.init(elems, options);
});

function App() {
  return (
    <div className="App">
      <Navigator></Navigator>
      <Content></Content>
    </div>
  );
}

export default App;
//<Footer></Footer>
