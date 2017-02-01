import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import { connect } from 'react-redux';

// React Component Imports
import GoalItem from './goalItem';

class GoalList extends Component {
  componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        const { email , title } = goal.val();
        const serverKey = goal.key;
        goals.push({ email, title, serverKey });
      })

      this.props.setGoals(goals);
    })
  }
  render() {
    console.log(`this.props.goals`, this.props.goals);
    return(
      <div>
      {
        this.props.goals.map((goal, i) => {
            return (
              <GoalItem goal={goal} key={i}/>
            )
        })
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  }
}

export default connect(mapStateToProps, { setGoals }) (GoalList);
