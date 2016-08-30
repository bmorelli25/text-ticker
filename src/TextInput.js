import React from 'react';
import './App.css';

var TextInput = React.createClass({
  handleText: function (e) {
    e.preventDefault();
    var updatedText = this.refs.tickerText.value;
    var sizeOfTicker = this.refs.sizeOfTicker.value;

    if(updatedText.length > 0 && sizeOfTicker > 0) {
      this.updateTickerArray(updatedText, sizeOfTicker);
      this.props.onInputUpdate(updatedText, sizeOfTicker);
    } else {
      this.refs.tickerText.focus();
    }
  },
  updateTickerArray: function (updatedText, sizeOfTicker) {
    var whiteSpace = '\u00a0';
    var startingArray = [];
    for (var i = 0; i < sizeOfTicker; i++){
      startingArray[i] = whiteSpace;
    };

    var messageArray = updatedText.split('');
    var finalArray = startingArray.concat(messageArray, startingArray);
    var newArray = finalArray.slice(0);

    this.refs.tickerText.value = '';
    this.props.onInputUpdate(updatedText, sizeOfTicker, newArray);
    console.log('finalArray', newArray);
  },
  render: function () {
    return(
      <div>
        <form ref="form" onSubmit={this.handleText}>
          <input type="text" ref="tickerText" placeholder="Enter your text here"/>
          <input type="number" ref="sizeOfTicker" placeholder="Size of Ticker (in chars)" defaultValue="80"/>
          <button>Start</button>
        </form>
      </div>
    );
  }
});

module.exports = TextInput;
