import React, { Component } from 'react';
import { completeGoal } from '../firebase';
import { connect } from 'react-redux';
import { setComplete } from '../actions';

class CompleteGoalList extends Component {

  componentDidMount() {
    completeGoal.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });
      })
      console.log('completeGoals', completeGoals)
      this.props.setComplete(completeGoals);
    })
  }

  clearCompleted() {
    completeGoal.set([]);
  }

  render() {

    return(
      <div>
        {
          this.props.completeGoals.map((completeGoal, i) => {
            const { title , email } = completeGoal;
            return (
              <div key={i}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
        <button
          className="btn btn-primary"
          onClick={this.clearCompleted.bind(this)}
          >
          Clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;

  return {
    completeGoals
  }
}

export default connect (mapStateToProps, { setComplete }) (CompleteGoalList);
