import React from 'react';

export class AddButton extends React.Component {
    constructor(props) {
        super(props)
    }

    addClick() {
        this.props.handleAdd()
    }

    render() {
        return (
            <button onClick={this.props.addClick}>+1</button>
        )
    }
}