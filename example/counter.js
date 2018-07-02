import React, { Component } from 'react';
import { connect } from './store';

class Counter extends Component {
    constructor () {
        super();
    }

    clickHandler = (event) => {
        this.props.dispatch(this.increaseCount(this.props.value));
    }

    increaseCount (value) {
        return function (dispatch) {
            let data = {
                key: 'example.value',
                payload: ++value
            };

            dispatch(data);
        }
    }

    render() {
        return (
            <div className="div">
                <h4>Counter</h4>
                <div className="text"> {this.props.text} : {this.props.value}</div>
                <button className="button" onClick={this.clickHandler} >Count</button>
            </div>
        )
    }

}

function select (state) {
    return {
        value: state.example.value
    };
}

export default connect(select)(Counter);