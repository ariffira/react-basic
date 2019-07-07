import React, { Component } from 'react';
import './App.css';
import './css/main.css';
import Header from './components/header';
import Basic from './components/basic';
import Bootstrap from './components/bootstrapComp';
import SassTest from './components/sassCom';
import StyleComp from './components/styleComp';
import Counter from './components/counter';
import RouterOne from './components/routerOne';
import RouterTwo from './components/routerTwo';
import StateTest from './components/stateTest';
import Parent from './components/parent';
import LifeCycle from './components/lifeCycle';
import Footer from './components/footer';
import ReactRefs from './components/reactRefs';
import Todo from './components/Todo';
import ChatClient from './components/ChatClient';
import ReduxTestComp01 from './components/reduxTestComp01';

class App extends Component {
  state = {
    author: 'Md Ariful Islam',
    email: 'arifulislam.ude@gmail.com',
    website: 'mailab.com',
    date: new Date()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Basic/>
          <Bootstrap/>
          <Counter/>
          <SassTest/>
          <StyleComp/>
        </header>
        <RouterOne/>
        <RouterTwo/>
        <StateTest dataFromState={this.state}/>
        <Parent/>
        <LifeCycle/>
        <ReactRefs/>
        <Todo/>
        <ChatClient/>
        <hr/>
        <ReduxTestComp01/>
        <hr/>
        <Footer/>
      </div>
    );
  }
}

export default App;
