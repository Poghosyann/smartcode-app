import React, {Component} from 'react';

export default class LearnCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {

            react: true,
            javascript: false
        }

    }

    onSelect = () => {
        this.setState({
            javascript: !this.state.javascript
        })

    }
    onSelectReact = () => {
        this.setState({
            react: !this.state.react
        })
    }

    render() {

        return (

            <section className="table-section ">
                <button
                    onClick={this.onSelect}
                    className={`style-btn ${this.props.show} ? active-btn`}>
                    javascript</button>
                <button onClick={this.onSelectReact}>
                    react</button>
                {this.state.react
                    ? <table className="table-style">

                            <tr>
                                <th>Դաս</th>
                                <th>Թեման</th>
                            </tr>

                            <tr>
                                <td>Դաս 1</td>
                                <td>How React Works | Understanding Virtual DOM</td>
                            </tr>
                            <tr>
                                <td>Դաս 2</td>
                                <td>Base features and syntax | Hello world</td>
                            </tr>
                            <tr>
                                <td>Դաս 3</td>
                                <td>Introducing JSX</td>
                            </tr>
                            <tr>
                                <td>Դաս 4</td>
                                <td>What are components | Creating our First Components</td>
                            </tr>
                        </table>
                    : null}

                {this.state.javascript
                    ? <table className="table-style">

                            <tr>
                                <th>Դաս javascript</th>
                                <th>Թեման</th>
                            </tr>

                            <tr>
                                <td>Դաս 1</td>
                                <td>Javascript</td>
                            </tr>
                            <tr>
                                <td>Դաս 2</td>
                                <td>Javascript</td>
                            </tr>
                            <tr>
                                <td>Դաս 3</td>
                                <td>Javascript</td>
                            </tr>
                            <tr>
                                <td>Դաս 4</td>
                                <td>Javascript</td>
                            </tr>
                        </table>
                    : null}

            </section>

        )
    }
}