import React, { Component } from 'react';

class Todo extends Component {
    state = { 
        todoText: "",
        todos: []
     }
    render() { 
        return ( 
            <div>
                <h5>Simple todo app</h5>

                {/* 

                      prints list ul/li

                      push to array

                      render array using map function 
                
                */}

                <div>
                    <input type="text" 
                    value={this.state.todoText}
                    onChange={this.handleTextChange} 
                    placeholder="Todo Task"/>
                    <button onClick={this.handleOnClick}>Add</button>
                </div>

                <div>
                    <ul>
                        {this.state.todos.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                </div>
            </div>
         );
    }

    handleTextChange = (event) => {
        this.setState({todoText: event.target.value});
    }

    handleOnClick = (e) => {
        console.log(this.state.todoText);
        this.state.todos.push(this.state.todoText);
        this.setState({todoText:  ""});
    } 
}
 
export default Todo;


