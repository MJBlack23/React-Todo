import firebase from 'firebase';

try {
  const config = {
      apiKey: "AIzaSyCxO6IKL8nej7qvkYPRZFyHvOZ6FCcggAY",
      authDomain: "mjblack23-todo-app.firebaseapp.com",
      databaseURL: "https://mjblack23-todo-app.firebaseio.com",
      projectId: "mjblack23-todo-app",
      storageBucket: "mjblack23-todo-app.appspot.com",
      messagingSenderId: "137418791648"
    };
  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
