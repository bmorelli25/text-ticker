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
      count: 0
    };
  },
  startCount: function () {
    this.count = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount <= this.state.text.length ? newCount : 0
      });
      console.log('ticking', this.state.count);
    }, 250);
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleTextUpdate: function (text) {
    this.setState({
      text: text
    });
  },
  render() {
    var {text, count} = this.state;

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
        <TextOutput text={text} count={count}/>
      </div>
    );
  }
});

export default App;
