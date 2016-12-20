var React = require('react')

var SearchUser = React.createClass({

  handleSubmit: function(e){
    console.log("sss")
    e.preventDefault()
  },
  render:function(){
   return(
      <div className="jumbotron">
          <h1>GitHub Info</h1>
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
    );
  }


})


module.exports = SearchUser
