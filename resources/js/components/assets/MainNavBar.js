import React, { useState } from "react";
import logo from './logo.jpg';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./MainNavBar.css";
import { NavLink as RRNavLink, withRouter } from "react-router-dom";

function MainNavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

  return (
      <div>
        <Navbar color="dark" dark expand="md">
         
          <NavbarBrand>
            <img src={logo} alt="logo" />
          </NavbarBrand>
    
        </Navbar>
      </div >
    );
}

export default withRouter(MainNavBar);
