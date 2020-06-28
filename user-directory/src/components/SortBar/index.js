import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Add from '../pages/Add';
import Home from '../pages/Home';
import Alpha from '../../manipulations/Alpha';

const SortBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <HashRouter>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Employee Directory</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink className='navLinks'><Link to={'/add'} className='nav-link'>Add</Link></NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Sorting
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink className='navLinks'><Link to={'/alpha'} className='nav-link' style={{color: 'black'}}>Alphabetical</Link></NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      By ID
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Filtering
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Managers
                    </DropdownItem>
                    <DropdownItem>
                      Engineers
                    </DropdownItem>
                    <DropdownItem>
                      Interns
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <NavbarText>Philip Lemaster</NavbarText>
            </Collapse>
          </Navbar>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/alpha">
                    <Alpha />
                </Route>
            </Switch>
            
      </HashRouter>
    </div>
  );
}

export default SortBar;