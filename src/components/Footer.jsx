import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer blue">
      <div className="container" id="logu-footer">
        <div className="row">
          <div className="col s6 ">
            <h5 className="white-text">Kontakt</h5>
            <p className="grey-text text-lighten-4 center-align">
              <ul>
                <li>Gunnar Bridell</li>
                <li>
                  <a
                    href="mailto: gunnar.bridell@mac.com"
                    className="white-text"
                  >
                    gunnar.bridell@mac.com
                  </a>
                </li>
                <li>070-371 00 23</li>
              </ul>
            </p>
          </div>

          <div class="col s6 ">
            <h5 class="white-text">Länkar</h5>
            <ul>
              <li>
                <a
                  class="grey-text text-lighten-3"
                  href="http://www.lady-helmsman.org/senorita/index.htm"
                  target="_blank"
                >
                  Volvo
                </a>
              </li>
              <li>
                <a
                  class="grey-text text-lighten-3"
                  href="http://www.carreraforbundet.se/data-senorita-helmsman"
                  target="_blank"
                >
                  Benns
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2020 Copyright Logu HB</div>
      </div>
    </footer>
  );
}
