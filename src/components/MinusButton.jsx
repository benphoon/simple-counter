import React from 'react';

export class MinusButton extends React.Component {
    constructor(props){
        super(props)
    }
    
    minusClick() {
        this.props.handleMinus()
    }

    render() {
        return (
            <button onClick={this.props.minusClick}>-1</button>
        )
    }
}