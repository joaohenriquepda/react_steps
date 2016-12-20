var React = require('react');
//var ReactDOM = require('react-dom');
var SearchUser = require('./SearchUser')

var Github = React.createClass({


  render:function() {
    return(
      <div className="container">
          <SearchUser/>
      </div>
    );
  }
});

module.exports = Github;
