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
    var sliceStart = -sizeOfTicker -count;
    var sliceEnd = -count;
    var tickerArray = textArray.slice(sliceStart, sliceEnd);

    return tickerArray.join('');
  },
  // componentWillUpdate: function (newProps, newState) {
  // },
  render: function () {
    return (
      <div>
        <p>
          Right to Left
        </p>
        <p>
          <b>||{this.renderTicker()}||</b>
        </p>
        <p>
          Left to Right
        </p>
        <p>
          <b>||{this.renderReverseTicker()}||</b>
        </p>
      </div>
    );
  }
});

module.exports = TextOutput;
