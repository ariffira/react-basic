import React from 'react';

class Counter extends React.Component {
    state = { 
        counter: 0,
    }
    handleCount = ()=> {
        this.setState((prevState)=> {
            return {
              counter: prevState.counter + 1
            }
        });
    }
    render() {
        return (
            <button className="my_btn" onClick={this.handleCount}>
               Counter event: You clicked total: {this.state.counter} times
            </button>
        );
    }
}

export default Counter;