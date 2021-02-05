import React from 'react';
import "./style/style.css";
function Header() {
  return (
    <>
    <header className="header">
     <div className="container">
      <nav className="navmenu">
          <ul className="navlist">
            <li className="listitem">
              
              <a href="/" className="navlink">Home</a>
              
              </li>
            <li className="listitem">
              
              <a href="/Works" className="navlink">Works</a>
              
              </li>
            <li className="listitem">
              
              <a href="/Contact" className="navlink">Contact</a>
              
              </li>
          </ul>
      </nav>
     </div>
   </header>
    </>
  );
}

export default Header;