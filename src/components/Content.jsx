import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Loggbok from "./Loggbok.js"

//<img src={require("../img/s.png")} alt=""></img>;
//<img src={require("../img/ss.png")} alt=""></img>
export default function MainText() {
  return (
    <Router>
    <div>
      
      <div className="row">
        <div className="col s12 m1"></div>

        <div className="col s12 m5">
          <div className="icon-block left-align">
            <h5>Loggboken</h5>

            <p className="light">
              Loggboken (www.loggbaten.se) är.....
              </p>
          </div>
        </div>

        <div className="col s12 m5">
          <div className="icon-block left-align">
            <h5>Funktioner</h5>

            <p className="light">
              <ul>
                
                <li> <Link to="/loggbok">Loggbok</Link> </li>
                <li> <Link to="/">Ekonomi</Link> </li>
                <li> <Link to="/">Manualer</Link> </li>
                <li> <Link to="/">Kalender</Link> </li>
                <li> <Link to="/">Bilder</Link> </li>
                <li> <Link to="/">Filer</Link> </li>
                <li> <Link to="/">Länkar</Link> </li>

                
                
              </ul>
            </p>

            <Switch>
          <Route path="/Loggbok">
            <Loggbok />
          </Route>
          
        </Switch>


          </div>
        </div>

        <div className="col s12 m1"></div>
      </div>
    </div>
    </Router>
  );
}
