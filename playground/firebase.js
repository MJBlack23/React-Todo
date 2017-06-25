import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCxO6IKL8nej7qvkYPRZFyHvOZ6FCcggAY",
    authDomain: "mjblack23-todo-app.firebaseapp.com",
    databaseURL: "https://mjblack23-todo-app.firebaseio.com",
    projectId: "mjblack23-todo-app",
    storageBucket: "mjblack23-todo-app.appspot.com",
    messagingSenderId: "137418791648"
  };
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();
firebaseRef.set({
  appName: {
    name: 'TodoApp',
    version: "1.0.0"
  },
  isRunning: true,
  user: {
    name: 'Matt',
    age: 33
  }
});

let todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (ss) => {
  console.log('child_added', ss.key, ss.val());
});

todosRef.push({
  text: 'Learn Firebase.'
});

todosRef.push({
  text: 'Learn responsive Foundation'
})
