import React from 'react';
import './App.css';

var TextOutput = React.createClass({
  renderTicker: function () {
    var {textArray, count, sizeOfTicker} = this.props;
    var tickerArray = textArray.slice(count, count+sizeOfTicker);

    return tickerArray.join('');
  },
  renderReverseTicker: function () {
    var {textArray, count, sizeOfTicker, text} = this.props;
    var sliceStart = -sizeOfTicker -count -1;
    var sliceEnd = -count - 1;
    var tickerArray = textArray.slice(sliceStart, sliceEnd);

    return tickerArray.join('');
  },
  renderWordFlash: function () {
    var {textArray, count, sizeOfTicker, text} = this.props;
    var wordArray = text.split(' ');

    return wordArray[count % wordArray.length];
    //this will error if the array length isn't directly divisible by the
    //final count. Need to implement a fix.
  },
  render: function () {
    return (
      <div>
        <p>
          Right to Left
        </p>
        <p>
          <b>{this.renderTicker()}</b>
        </p>
        <p>
          Left to Right
        </p>
        <p>
          <b>{this.renderReverseTicker()}</b>
        </p>
        <p>
          Word Flash
        </p>
        <p>
          <b>{this.renderWordFlash()}</b>
        </p>
      </div>
    );
  }
});

module.exports = TextOutput;
