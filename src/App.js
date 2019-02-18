import React, { Component } from 'react';
import './App.css';
import './css/main.css';
import Header from './components/header';
import Basic from './components/basic';
import Btn_bootstrap from './components/bootstrapComp';
import SassTest from './components/sassCom';
import StyleComp from './components/styleComp';
import Counter from './components/counter';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header></Header>
          <Basic></Basic>
          <Btn_bootstrap></Btn_bootstrap>
          <Counter></Counter>
          <SassTest></SassTest>
          <StyleComp></StyleComp>
        </header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
