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
import ManagerF from '../../manipulations/ManagerF';
import EngineerF from '../../manipulations/EngineerF';
import InternF from '../../manipulations/InternF';


const SortBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <HashRouter>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand><Link to={'/home'} className='nav-link' style={{color: 'white'}}>User Directory</Link></NavbarBrand>
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
                      <NavLink className='navLinks'><Link to={'/'} className='nav-link' style={{color: 'black'}}>By ID</Link></NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Filtering
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink className='navLinks'><Link to={'/managerf'} className='nav-link' style={{color: 'black'}}>Managers</Link></NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink className='navLinks'><Link to={'/engineerf'} className='nav-link' style={{color: 'black'}}>Engineers</Link></NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink className='navLinks'><Link to={'/internf'} className='nav-link' style={{color: 'black'}}>Interns</Link></NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <NavbarText>Philip Lemaster</NavbarText>
            </Collapse>
          </Navbar>

            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/alpha">
                    <Alpha />
                </Route>
                <Route path="/managerf">
                    <ManagerF />
                </Route>
                <Route path="/engineerf">
                    <EngineerF />
                </Route>
                <Route path="/internf">
                    <InternF />
                </Route>
            </Switch>
            
      </HashRouter>
    </div>
  );
}

export default SortBar;