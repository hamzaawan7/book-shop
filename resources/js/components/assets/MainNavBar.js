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
         
          <NavbarBrand tag={RRNavLink} to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="logo" />
          </NavbarBrand>
       
            
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>    

              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to={"/"}
                  activeClassName="active"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to={"book-page"}
                  activeClassName="active"
                  onClick={() => setIsOpen(false)}
                >
                  Book Page
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
}

export default withRouter(MainNavBar);
