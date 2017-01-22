import React from 'react'
import UserSearch from './UserSearch'
import UserInfo from './UserInfo'

class GithubSearch extends React.Component{

  render(){

    return(
      <div>
        <UserSearch/>
        <UserInfo/>
      </div>
    )

  }
}

export default GithubSearch
