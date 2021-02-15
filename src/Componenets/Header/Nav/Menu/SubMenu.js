import React from "react";
import Decor from '../../../../Icons/decorative.svg';
import {NavLink} from 'react-router-dom';
import Service from '../../../../Service/Service';

const SubMenu = props => ( 
    <div
        className={`sub-menu-lists ${props.showMenu
        ? "openMenu"
        : ""}`}>
        <ul className="menu">
            {Service
                .menuItems
                .map((item, index) => <li key={index}>
                    <NavLink onClick={props.setHeaderState()} to={item.link}>{item.title}
                    </NavLink>
                </li>)
}
            <img src={Decor} className="decor" alt="Decor"/>
        </ul>

    </div>
);

export default SubMenu;
