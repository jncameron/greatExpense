import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAJqNY87DV6ODptag7JbB6DCGK53slpA1Q",
  authDomain: "great-expense.firebaseapp.com",
  databaseURL: "https://great-expense.firebaseio.com",
  projectId: "great-expense",
  storageBucket: "great-expense.appspot.com",
  messagingSenderId: "288089736897"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  githubAuthProvider,
  database as default
};
