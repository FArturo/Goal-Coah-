import React, { Component } from 'react';
import { completeGoal, goalRef } from '../firebase';
import { connect } from 'react-redux';

class GoalItem extends Component {
  completeGoal() {
    // add to complete goal to database
    // remove goal
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    console.log('serverkey', serverKey);
    goalRef.child(serverKey).remove();
    completeGoal.push({email, title});
  }
  render() {
    const { email, title } = this.props.goal;
    return(
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={this.completeGoal.bind(this)}
          >
          Complete
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect( mapStateToProps, null)(GoalItem) ;
