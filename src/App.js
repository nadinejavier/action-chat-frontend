import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 

  render() {

    constructor(props) {
      super(props);
      this.state = {
          currentChatMessage: ""
      };
    }

    updateCurrentChatMessage(event) {
      this.setState({
        currentChatMessage: event.target.value
      });
    }
    return (
      <div className="App">
          <div className='stage'>
              <h1>Chat</h1>
              <div className='chat-logs'>
              </div>
              <input
            value={ this.state.currentChatMessage }
            onChange={ (e) => updateCurrentChatMessage(e) }  
            type='text'
            placeholder='Enter your message...'
            className='chat-input'/>
          <button className='send'>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default App;
