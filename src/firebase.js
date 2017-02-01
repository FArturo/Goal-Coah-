import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB9Ar4jSqOJYT9DFD3kAKIoLovzeUdAOLk",
    authDomain: "goalcoach-67c76.firebaseapp.com",
    databaseURL: "https://goalcoach-67c76.firebaseio.com",
    storageBucket: "goalcoach-67c76.appspot.com",
    messagingSenderId: "751032064522"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoal = firebase.database().ref('completeGoals');
