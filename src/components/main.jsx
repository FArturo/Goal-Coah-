import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';

// React Components
import AddGoal from './addGoal';
import GoalList from './goalList';
import CompleteGoalList from './completeGoalList';

class Main extends Component {
  onSignOut() {
    firebaseApp.auth().signOut();
  }
  render() {
    return(
      <div style={{marginLeft: '15px'}}>
        <h3>Goals Coach</h3>
        <AddGoal/>
        <hr/>
        <h4>Goals</h4>
        <GoalList/>
        <hr/>
        <h4>Complete Goals</h4>
        <CompleteGoalList/>
        <hr/>
        <button className="btn btn-danger" onClick={this.onSignOut.bind(this)}>
          Sign out
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state', state)
  return {}
}

export default connect (mapStateToProps)(Main)
