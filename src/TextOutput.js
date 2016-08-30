import React from 'react';
import './App.css';

var TextOutput = React.createClass({
  renderTicker: function () {
    var whiteSpace = '\u00a0';
    var startingArray = []
    for (var i = 0; i < 80; i++){
      startingArray[i] = whiteSpace;
    };

    var message = this.props.text;
    var messageArray = message.split('');
    var finalArray = startingArray.concat(messageArray);

    //console.log('finalArray: ', finalArray)

    return (
      finalArray.join('')
    );
  },
  render: function () {

    var {text, count} = this.props;
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
