import React, { Component } from "react";


class TodoAdder extends Component {

    state = {
        newTodo: ''
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} action="">
                <input value={this.state.newTodo} onChange={this.handleChange} type="text" name="" id="" />
                <button type="submit">More things todo...</button>
            </form>
        )
    }

    handleChange = (event) => {
        this.setState({
            newTodo: event.target.value
        }, () => console.log(this.state.newTodo))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo)
        this.setState({
            newTodo: ''
        })
    }
}


export default TodoAdder;