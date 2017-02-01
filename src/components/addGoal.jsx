import React, { Component } from 'react'
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this', this);
    const { title } = this.state;
    const { email } = this.props.user;
    goalRef.push({email, title})
  }

  render() {
    return(
      <div className="form-inline">
        <div className="form-group">
          <input onChange={e => this.setState({ title: e.target.value })} type="text" className="form-control" placeholder="Add a goal" style={{margin: '4px'}}/>
          <button onClick={this.addGoal.bind(this)} className="btn btn-success">Add Goal</button>
        </div>
      </div>
    )
  }
}

function mapStatToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect (mapStatToProps, null)(AddGoal)
