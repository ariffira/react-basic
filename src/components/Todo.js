import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newItem: '',
            list: []
         }
    }
    // add item to list
    addTodo = (e)=> {
       e.preventDefault();
       // console.log(e.target.newItem.value)
       let data = e.target.newItem.value;
       let newItem = {value: data.slice()};
       console.log(newItem);
       let list = [...this.state.list];
       list.push(newItem);
       console.log(list);
       this.setState({
           list: list
       })
    }
    render() { 
        return (  
            <div>
                <h1>Todo App</h1>
                <form onSubmit={this.addTodo}>
                    <div className="form-group">
                      <label>Task/item</label>
                      <input type="text" name="newItem" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-danger">+Add</button>
                    </div>
                </form>
                <ul>
                    {this.state.list.map(item=>{
                        return (
                            <li key={item.id}>{item.value}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default Todo;