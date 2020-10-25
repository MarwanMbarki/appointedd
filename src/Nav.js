import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Navig = (props) => {    
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Appointedd LTD</NavbarBrand>
          <Collapse>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/"></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"></NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Login/Signup</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Navig;