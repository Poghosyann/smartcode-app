import React, {Fragment} from "react";
import Credit from './Credit/Credit';
import Login from './Login/Login';
import Menu from './Menu/Menu';
import logosmart from '../../../images/Logo.svg';
import {Link} from 'react-router-dom';
import SubMenu from './Menu/SubMenu';

const Nav = props => (
    <Fragment>
        <div className="nav-lists">
            <div className="header-nav-section">
                <div className="logo-page" id="home-page">
                    <Link to="/">
                        <img src={logosmart} alt="SmartCode" title="SmartCode"/>
                    </Link>
                </div>
            </div>
            <Credit/>
            <Login/>
            <Menu showMenu={props.showMenu} setHeaderState={() => props.setHeaderState}/>
        </div>
        <SubMenu setHeaderState={() => props.setHeaderState} showMenu={props.showMenu}/>
    </Fragment>
);

export default Nav;