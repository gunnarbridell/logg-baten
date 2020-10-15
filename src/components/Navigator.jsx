import React from "react";

export default function Navigator() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper transparent_ black">
          <a href="/" className="brand-logo logo-adjust">
            Logg boken
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#logu-images">Bilder</a>
            </li>
            <li>
              <a href="#logu-footer">Länkar</a>
            </li>
            <li>
              <a href="#logu-footer">Kontakt</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="#logu-images">Bilder</a>
        </li>
        <li>
          <a href="#logu-footer">Länkar</a>
        </li>
        <li>
          <a href="#logu-footer">Kontakt</a>
        </li>
      </ul>
    </div>
  );
}
