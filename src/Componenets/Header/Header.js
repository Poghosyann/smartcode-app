/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import '../Header/Header.css';

import salyLogo from '../../images/Saly-logo.svg';
import SocialLinks from "./SocialLinks/SocialLinks";
import scrolIcon from '../../Icons/scrolicon.svg';
import DecorateLine from '../../Icons/DecorativeLine.svg';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {



    render() {
        return (

            <header className="big-header">

                <div className="parent-header-banner">
                    <div className="header-banner">
                        <div className="title-section">
                            <div className="titles">
                                <h1 className="first-title">ԾրագրավորմաՆ</h1>
                                <h2 className="second-title">ԴԱՍԸՆԹԱՑՆԵՐ</h2>
                            </div>
                            <div className="text-course">
                                <p>Որակյալ ուսուցում, Անվճար պրակտիկա, Երաշխավորված աշխատանք</p>
                            </div>
                            <NavLink to="/courses" className="courses-btn">Դասընթացներ</NavLink>
                        </div>
                        <div className="logo-banner">
                            <img src={salyLogo} className="salylogo" alt="SalyLogo" title="SalyLogo"/>

                        </div>
                        <img src={DecorateLine} alt="DecorateLine" className="decoratelLine"/>
                    </div>
                </div>
                <div className="header-down">
                    <SocialLinks/>
                    <a href="#" className="scroll" alt="downscroll">

                        <img
                            src={scrolIcon}
                            alt="downScroll"
                            title="downscroll"
                            className="downscroll"/>
                        <span>SCROLL TO BOTTOM</span>
                    </a>
                </div>

            </header>
        )
    }
}
