import React, {Fragment} from 'react';
import './App.css';
import Header from './Componenets/Header/Header';
import Main from './Componenets/Main/Main';
import Footer from './Componenets/Footer/Footer';
import Nav from './Componenets/Header/Nav/Nav';
import {Route, Switch} from 'react-router-dom';
import Aboutus from './Componenets/Main/About-us/About-us';
import Information from './Componenets/Main/Information/Information';
import Join from './Componenets/Main/Join/Join';
import FullCourses from './Componenets/Main/FullCourses/FullCourses';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }

    setHeaderState = () => {

        this.setState({
            showMenu: !this.state.showMenu
        });
    };

    render() {
        let {showMenu} = this.state;
        return (
            <section className="App">
                <Nav showMenu={showMenu} setHeaderState={this.setHeaderState}/>
                <Switch>
                    <Fragment>
                        <Route path="/" exact render={() => <Header showMenu={showMenu}/>}/>
                        <Route path="/" exact component={Main}/>
                        <Route path="/about" exact component={Aboutus}/>
                        <Route
                            path="/courses"
                            exact
                            render={() => <Fragment>
                            <FullCourses/>
                            <Information/>
                            <Join/>
                        </Fragment>}/>
                    </Fragment>
                </Switch>
                <Footer/>
            </section>
        );
    }

}
