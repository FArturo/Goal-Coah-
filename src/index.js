// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { logUser } from './actions';

const store = createStore(reducer);

// Page Componennts
import Main from './components/main';
import SignIn from './components/signIn';
import SignUp from './components/signUp';

// Firebase --
import { firebaseApp } from './firebase';

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    // console.log(`A user has signed in or up`, user);
    const { email } = user;
    store.dispatch(logUser(email));
    browserHistory.push('/main');
  } else {
    // console.log(`The user has signed out or still needs to sign in.`);
    browserHistory.replace('/signin')
  }
});

render (
<Provider store={store}>
  <Router path="/" history={browserHistory}>
    <Route path="/main" component={Main}/>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
  </Router>
</Provider>,
   document.getElementById('root')
);
