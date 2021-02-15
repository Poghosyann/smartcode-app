import React from 'react';
import LoginSal from '../../../../images/loginSaly.svg'

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogin: props.showCredit,
            classAdd: false
        }
        console.log(this.state.classAdd)
    }

    loginHandler = () => {

        this.setState({
            showLogin: !this.state.showLogin,
            classAdd: !this.state.clasAdd
        })

    }
    closeModal = () => {
        this.setState({showLogin: false})
    }
    render() {

        let loginSign = ["login-sign-show"];
        if (this.state.showLogin) {
            loginSign.push("show-login");

        }

        return (

            <section className="login-section">
                <input
                    type="button"
                    value="ԳՐԱՆՑՎԵԼ"
                    className="btn-login btn"
                    onClick={this.loginHandler}/>
                <div className={loginSign.join(" ")}>
                    <div className="saly-credit-logo">
                        <img src={LoginSal} alt="LoginSal"/>
                    </div>
                    <div className="close" onClick={this.closeModal} id="login-page">
                        <span className="dir1"></span>
                        <span className="dir2"></span>
                    </div>
                    <form autoComplete="true" className="credit-form">
                        <input
                            type="name"
                            name="name"
                            placeholder="Անուն Ազգանուն"
                            className="nameform"/>
                        <input type="email" name="email" placeholder="էլ․փոստ" className="email"/>
                        <input type="tel" name="tel" placeholder="Հեռախոսահամար" className="telform"/>
                        <input type="submit" value="Դիմել" className="apply-doc-form"/>
                    </form>
                </div>

            </section>
        )
    }
}