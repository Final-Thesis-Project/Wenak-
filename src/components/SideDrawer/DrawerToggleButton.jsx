import React from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import './DrawerToggleButon.css';
// import Drawer from 'react-motion-drawer';

class DrawerToggleButton extends React.Component {

render() {
    return( 
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon src>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="Profile">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Orders
                    </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                           current Order
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Previous Orders
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>

    // <button className="toggle-button">
   
    //     <div className="toggle-button__line" />
    //     <div className="toggle-button__line" />
    //     <div className="toggle-button__line" />

    //     <Drawer open={false} width={300} onChange={false}>
    //     { val =>
    //       <ul style={{ opacity: 300 / val }}>
    //         <li>Home</li>
    //         <li>About</li>
    //         <li>Settings</li>
    //       </ul>
    //     }
    //   </Drawer>

    // </button>
    );
}
}

export default DrawerToggleButton;
