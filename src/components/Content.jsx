import React from "react";
//<img src={require("../img/s.png")} alt=""></img>;
//<img src={require("../img/ss.png")} alt=""></img>
export default function MainText() {
  return (
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
                <li> Skriva dagbok</li>
                <li> Bifoga bilder</li>
                <li> Visa bildspel</li>
                <li> Manualer till båten</li>
                <li> Kalender</li>
                <li> Externa länkar</li>
                
              </ul>
            </p>
          </div>
        </div>

        <div className="col s12 m1"></div>
      </div>
    </div>
  );
}
