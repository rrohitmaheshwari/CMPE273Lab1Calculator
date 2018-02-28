import React, {Component} from 'react';
import * as API from './api/API.js';
import './App.css';


class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: ' '
        };


    }

    result() {

        API.doPost(this.state)
            .then((message) => {
                console.log(message.message);
                if (message.message == null)
                    this.setState({data: ' Infinity'})
                else
                    this.setState({data: ' ' + message.message})
            });


    }

    resetcal() {
        this.setState({data: ' '})
    }

    updateState(val) {
        if (this.state.data === ' Illegal expression' || this.state.data === ' Infinity')
            this.setState({data: ' ' + val});
        else
            this.setState({data: this.state.data + val});
        console.log(this.state.data);

    }


    render() {
        return (
            <div className="mx-auto">
                <div className="calc">
                    <div className="resulttext">
                        <pre>{this.state.data}</pre>
                    </div>

                    <div className="row">
                        <button className="calBut" onClick={this.updateState.bind(this, '7')}>7</button>
                        <button className="calBut" onClick={this.updateState.bind(this, '8')}>8</button>
                        <button className="calBut" onClick={this.updateState.bind(this, '9')}>9</button>
                        <button className="calButControl" onClick={this.updateState.bind(this, '+')}>+</button>
                    </div>

                    <div className="row">
                        <button className="calBut" onClick={this.updateState.bind(this, '4')}>4</button>
                        <button className="calBut" onClick={this.updateState.bind(this, '5')}>5</button>
                        <button className="calBut" onClick={this.updateState.bind(this, '6')}>6</button>
                        <button className="calButControl" onClick={this.updateState.bind(this, '-')}>-</button>
                    </div>

                    <div className="row">
                        <button className="calBut" onClick={this.updateState.bind(this, '1')}>1</button>
                        <button className="calBut" onClick={this.updateState.bind(this, '2')}>2</button>
                        <button className="calBut" onClick={this.updateState.bind(this, '3')}>3</button>
                        <button className="calButControl" onClick={this.updateState.bind(this, '/')}>/</button>
                    </div>

                    <div className="row">
                        <button className="calButControl" onClick={this.resetcal.bind(this)}>C</button>
                        <button className="calBut" onClick={this.updateState.bind(this, '0')}>0</button>
                        <button className="calButControl" onClick={this.result.bind(this)}>=</button>
                        <button className="calButControl" onClick={this.updateState.bind(this, '*')}>*</button>
                    </div>


                </div>
            </div>
        );
    }
}


export default App;
