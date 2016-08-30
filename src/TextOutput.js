import React from 'react';
import './App.css';

var TextOutput = React.createClass({
  renderTicker: function () {
    var {text, count, sizeOfTicker} = this.props;
    var whiteSpace = '\u00a0';
    var startingArray = []
    for (var i = 0; i < sizeOfTicker; i++){
      startingArray[i] = whiteSpace;
    };

    var messageArray = text.split('');
    var finalArray = startingArray.concat(messageArray, startingArray);
    var tickerArray = finalArray.slice(count, count+sizeOfTicker);

    return (
      tickerArray.join('')
    );
  },
  // componentWillUpdate: function (newProps, newState) {
  //
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
