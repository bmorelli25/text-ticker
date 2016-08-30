import React from 'react';
import './App.css';

var TextInput = React.createClass({
  handleText: function (e) {
    e.preventDefault();
    var updatedText = this.refs.tickerText.value;
    var sizeOfTicker = this.refs.sizeOfTicker.value;

    if(updatedText.length > 0) {
      this.refs.tickerText.value = '';
      this.props.onTextUpdate(updatedText, sizeOfTicker);
    } else {
      this.refs.tickerText.focus();
    }
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
