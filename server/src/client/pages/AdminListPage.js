import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'

class AdminListPage extends Component{
  componentDidMount(){
    this.props.fetchAdmins()
  }

  renderAdmin(){
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }

  render(){
    return (
      <div>
        Admin lists:
        <ul>
          {this.renderAdmin()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ admins }){
  return { admins }
}

export default {
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
  component: connect(
    mapStateToProps, 
    { fetchAdmins })
    (requireAuth(AdminListPage)
  )
}