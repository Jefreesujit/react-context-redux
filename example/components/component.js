import React, { Component } from 'react';
import { connect } from '../store';

class MyComponent extends Component {
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
                <div className="text"> {this.props.value}</div>
                <button className="button" onClick={this.clickHandler} >Click Here</button>
            </div>
        )
    }

}

function select (state) {
    return {
        value: state.example.value
    };
}

export default connect(select)(MyComponent);