import React from 'react';
import { AddButton } from './AddButton';
import { MinusButton } from './MinusButton';

export class DisplayNumber extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            number: 0
        }
        this.handleMinus = this.handleMinus.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleMinus = () => {
        this.setState((prevState) => ({
            number: prevState.number - 1
        }))
    }

    handleAdd = () => {
        this.setState(prevState => {
            return{
                number: prevState.number + 1
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.number}
                <br/>
                <MinusButton minusClick={this.handleMinus}/>
                <AddButton addClick={this.handleAdd}/>
            </div>
        )
    }
}