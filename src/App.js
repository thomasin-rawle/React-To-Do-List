import React, { Component } from 'react'
import List from './components/List'
import TodoAdder from './components/TodoAdder';


class App extends Component {

    state = {
        todos: [{task:'learn tap dance', isComplete: false } , {task:'visit grandparents', isComplete: false }, {task :'go and get coffee', isComplete: false }]
    }
    render() {
        return (
            <div>
                <h3>My to-do lists</h3>
                <TodoAdder addTodo={this.addTodo} />
                <List todos={this.state.todos} checkOffToDo={this.checkOffToDo} />
            </div>
        );
    }
    checkOffToDo = (task, isComplete) => {

       const newToDos = this.state.todos.reduce((acc, el) => {
            if (task === el.task) {
                el.isComplete = !isComplete
                acc.push(el)
            } 
            else {
                acc.push(el)
            }
            return acc
        }, [])
        //console.log(newToDo)
        //const newTodos = [newToDos]
        //console.log(newTodos)
       
        this.setState({
            todos: newToDos
        })
    }
    // removeTodo = (completedTodo) => {

    //     const newTodos = this.state.todos.filter(eachTodo => completedTodo !== eachTodo)
    //     this.setState({
    //         todos: newTodos
    //     })
    // }

    addTodo = (newTodo) => {
        const newTodos = [...this.state.todos, newTodo]
        this.setState({
            todos: newTodos
        })
    }
}


export default App;