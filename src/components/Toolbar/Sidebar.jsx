import React from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './Toolbar.css';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from "react-router-dom";


class Sidebar extends React.Component {
    render() {
        return(
            <SideNav className="sideNav"
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">

            <Link to={'/Home'}>
                <NavItem eventKey="home">
                    <NavIcon src>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                </Link>


                <NavItem eventKey="Profile">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Orders
                    </NavText>

                    <Link to={'/CurrentOrders'}>
                    <NavItem eventKey="charts/linechart">
                       
                        <NavText>
                           current Order
                        </NavText>
                        
                    </NavItem>
                    </Link>

                    <Link to={'/Orders'}>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Previous Orders
                        </NavText>
                    </NavItem>
                    </Link>

                </NavItem>

                <Link to={'/Settings'}>

                <NavItem eventKey="settings">
                    <NavIcon src>
                        <i className="fa fa-fw fa-settings" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Settings
                    </NavText>

                </NavItem>
                </Link>

                <Link to={"/ContactForm"}>

                <NavItem eventKey="contact">
                    <NavIcon src>
                        <i className="fa fa-fw fa-contact" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Contact
                    </NavText>
                </NavItem>
                </Link>

                <Link to={'/SocialFollow'}>

                <NavItem eventKey="share">
                    <NavIcon src>
                        <i className="fa fa-fw fa-share" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Share
                    </NavText>
                </NavItem>
                                    </Link>

                <Link to={'/About'}>
                <NavItem eventKey="about">
                    <NavIcon src>
                        <i className="fa fa-fw fa-about" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        About us
                    </NavText>
                </NavItem>
                </Link>

            </SideNav.Nav>
        </SideNav>
        );
    }
}

export default Sidebar;