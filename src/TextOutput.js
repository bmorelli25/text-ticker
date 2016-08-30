import React from 'react';
import './App.css';

var TextOutput = React.createClass({
  renderTicker: function () {
    var {textArray, count, sizeOfTicker} = this.props;
    var tickerArray = textArray.slice(count, count+sizeOfTicker);

    return (
      tickerArray.join('')
    );
  },
  // componentWillUpdate: function (newProps, newState) {
  // },
  render: function () {
    return (
      <div>
        <p>

          <b>||{this.renderTicker()}||</b>
        </p>
      </div>
    );
  }
});

module.exports = TextOutput;
