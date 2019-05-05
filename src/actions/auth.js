import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  githubAuthProvider
} from "../firebase/firebase";

let token;
let user = "test";

export const login = user => {
  return {
    type: "LOGIN",
    uid: user.uid,
    user: user.displayName
  };
};

export const startLoginGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLoginFacebook = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
  };
};

export const startLoginGithub = () => {
  return () => {
    return firebase.auth().signInWithPopup(githubAuthProvider);
  };
};

export const logout = () => {
  return {
    type: "LOGOUT"
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
