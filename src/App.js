import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';
import TextOutput from './TextOutput';
import initialArray from './initialTextArray';

var App = React.createClass({
  componentDidMount: function () {
    this.startCount();
  },
  getInitialState: function () {
    return { //state object goes here
      text: 'Your text will appear here',
      textArray: initialArray,
      sizeOfTicker: 80,
      count: 0
    };
  },
  startCount: function () {
    this.count = setInterval(() => {
      var newCount = this.state.count + 1;
      var {text, textArray, count, sizeOfTicker} = this.state;

      this.setState({
        count: newCount <= (text.length + sizeOfTicker) ? newCount : 0,
      });
      console.log('ticking', this.state.count);
    }, 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.count);
    this.count = undefined;
  },
  handleInputUpdate: function (updatedText, finalArray) {
    clearInterval(this.count);
    this.count = undefined;

    this.setState({
      text: updatedText,
      count: 0,
      textArray: finalArray
    }, function () {
      console.log('state final array',this.state.textArray);
    });
    this.startCount();
  },
  render() {
    var {text, count, sizeOfTicker, textArray, displayArray} = this.state;
    console.log('textarray', textArray);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>text-ticker</h2>
        </div>
        <p className="App-intro">
          Paragraph explaining things.
        </p>
        <TextInput onInputUpdate={this.handleInputUpdate} sizeOfTicker={sizeOfTicker}/>
        <TextOutput text={text} count={count} sizeOfTicker={sizeOfTicker} textArray={textArray} displayArray={displayArray}/>
      </div>
    );
  }
});

export default App;
