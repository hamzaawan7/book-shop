import React from "react";
import MainNavBar from "./MainNavBar";
import './theme.css';

export default function Header() {
  return (
    <header
      id="header"
      className=" header-effect-shrink"
      data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': false, 'stickyEnableOnMobile': true, 'stickyStartAt': 70, 'stickyChangeLogo': false, 'stickyHeaderContainerHeight': 70}"
    >
      <div className="header-body border-top-0 bg-dark box-shadow-none">
        <div className="container">        
          <MainNavBar />
        </div>
      </div>
    </header>
  );
}
