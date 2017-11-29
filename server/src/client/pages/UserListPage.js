import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UserListPage extends Component{
  componentDidMount(){
    this.props.fetchUsers()
  }

  renderUser() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  head(){
    return(
      <Helmet>
        <title>User List</title>
        <meta property="og:title" content="User List" />
      </Helmet>
    )
  }

  render(){
    return (
      <div>
        {this.head()}
        Here's the big list users:
        <ul>
          {this.renderUser()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { users: state.users }
}

function loadData(store){
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UserListPage)
}