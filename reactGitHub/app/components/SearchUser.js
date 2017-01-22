var React = require('react')
var GithubUserService = require('../services/GithubUserService')
var SearchUser = React.createClass({

  handleSubmit: function(e){
    e.preventDefault()
    GithubUserService.getReposByUsername(this.refs.username.value).then(
      function(response){
        this.props.updateRepos(response.data)
        console.log(response);
    }.bind(this))

    GithubUserService.getUserByUsername(this.refs.username.value).then(
      function(response){
        console.log(response);
        this.props.updateUser(response.data)
    }.bind(this))

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
