import React, { Component } from 'react'
import List from './components/List'
import TodoAdder from './components/TodoAdder';


class App extends Component {

    state = {
        todos: ['learn tap dance', 'visit grandparents', 'go and get coffee']
    }

    render() {
        return (
            <div>
                <h3>My to-do lists</h3>
                <TodoAdder addTodo={this.addTodo} />
                <List todos={this.state.todos} removeTodo={this.removeTodo} />
            </div>
        );
    }

    removeTodo = (completedTodo) => {

        const newTodos = this.state.todos.filter(eachTodo => completedTodo !== eachTodo)
        this.setState({
            todos: newTodos
        })
    }

    addTodo = (newTodo) => {
        const newTodos = [...this.state.todos, newTodo]
        this.setState({
            todos: newTodos
        })
    }
}


export default App;