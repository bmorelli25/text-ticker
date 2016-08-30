import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';
import TextOutput from './TextOutput';

var App = React.createClass({
  componentDidMount: function () {
    this.startCount();
  },
  getInitialState: function () {
    return { //state object goes here
      text: 'Your text will appear here',
      sizeOfTicker: 80,
      count: 0
    };
  },
  startCount: function () {
    this.count = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount <= (this.state.text.length + 79) ? newCount : 0
      });
      console.log('ticking', this.state.count);
    }, 100);
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleTextUpdate: function (updatedText, sizeOfTicker) {
    this.setState({
      text: updatedText,
      sizeOfTicker: sizeOfTicker
    });
  },
  render() {
    var {text, count, sizeOfTicker} = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>text-ticker</h2>
        </div>
        <p className="App-intro">
          Paragraph explaining things.
        </p>
        <TextInput onTextUpdate={this.handleTextUpdate}/>
        <TextOutput text={text} count={count} sizeOfTicker={sizeOfTicker}/>
      </div>
    );
  }
});

export default App;
