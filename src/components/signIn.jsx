import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';


class SignIn extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  signIn() {
    console.log('this.state', this.state)
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
     .catch(err => {
       this.setState({
         error: err
       })
     });
  }
  render() {
    return(
      <div className="form-inline" style={{margin: '2%'}}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5px' }}
            placeholder="email"
            onChange={e => this.setState({ email: e.target.value})}
          />
        <input
          className="form-control"
          type="password"
          style={{marginRight: '5px' }}
          placeholder="password"
          onChange={e => this.setState({password: e.target.value})}
        />
       <button
         className="btn btn-primary"
         type="button"
         onClick={this.signIn.bind(this)}
         >
         Sign In
       </button>
      </div>
        <div>{this.state.error.message}</div>
        <div>
          <Link to={`/signup`}>Sign Up Instead</Link>
        </div>
      </div>
    )
  }
}

export default SignIn
