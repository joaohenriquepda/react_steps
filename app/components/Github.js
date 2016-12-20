var React = require('react');
//var ReactDOM = require('react-dom');

var Github = React.createClass({

  handleSubmit:function(e){
    e.preventDefault();
    console.log(this.refs.username.value);
  },

  render:function() {
    return(
      <div className="container">
        <div className="jumbotron">
            <h1>Github Info</h1>
            <div className="row">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type = "text"
                    ref = "username"
                    className = "form-control"
                    placeholder = "Ex. João " />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary">Search
                  </button>
              </form>
            </div>
        </div>
      </div>
    );
  }

});


module.exports = Github;
