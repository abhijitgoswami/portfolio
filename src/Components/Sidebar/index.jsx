import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElement'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <React.Fragment>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper >
                    <SidebarMenu >
                        <SidebarLink to="/certificates" onClick={toggle}>
                            Certificates
                        </SidebarLink>
                        <SidebarLink to="/skills" onClick={toggle}>
                            Skills
                        </SidebarLink>
                        <SidebarLink to="/about" onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink to="/contact" onClick={toggle}>
                            Contact Me
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </React.Fragment>
    )
}

export default Sidebar
