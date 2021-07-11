import React from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLink, NavLogo, NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
       <React.Fragment>
          <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Abhijit</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to="/certificates">Certificates</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/skills">Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about">About</NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/contact">Contact Me</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
          </Nav>  
       </React.Fragment>
    )
}

export default Navbar
