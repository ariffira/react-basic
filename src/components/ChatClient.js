import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client';
//const socket = io('http://localhost:3000');


class ChatClient extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            isOnline: false,
            isTyping: '....',
            message: []
        }
    }
    // user join in chat
    joinChat = (e)=> {
       e.preventDefault();
       this.setState({
           username: e.target.username.value,
           isOnline: true
       })
    }
    // when user is typing
    typing = (e)=> {
        this.setState({
            isTyping: e.target.value
        })
    }
    // send chat message
    sendMsg = (e)=> {
        e.preventDefault();
        let message = e.target.message.value;
        this.setState({
            message: message
        })
    }

    render() { 
        if(!this.state.isOnline) {
            return (
                <div className="container">
                <hr/>
                    <h1>Chat in Reactjs</h1>
                    <div className="col-md-6">
                        <form onSubmit={this.joinChat}>
                            UserName: <input type="text" name="username"/>
                            <button type="submit" className="btn btn-danger">Join</button>
                        </form>
                    </div>
                <hr/>
                </div>
            );
        } else {
            return (
            <div className="container">
            <hr/>
                <h1>Chat in Reactjs</h1>
                <div className="col-md-6">
                    <form onSubmit={this.sendMsg}>
                        Write Message: 
                        <input type="text" name="message" onKeyDown={this.typing} />
                        <button type="submit" className="btn btn-danger">
                          Send
                        </button>
                    </form>
                    <p>
                        User is typing: {this.state.isTyping} <br/>
                        {this.state.username} Say: {this.state.message} 
                    </p>
                </div>
                <div className="col-md-4">
                    Users status<br/>
                    {
                        (!this.state.isOnline) ? 'No User online': this.state.username + ' is online'
                    }
                </div>
            <hr/>
            </div>
            );
        }
    }
}
 
export default ChatClient;