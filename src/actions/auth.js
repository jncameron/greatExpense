import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider
} from "../firebase/firebase";

export const login = uid => {
  return {
    type: "LOGIN",
    uid
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
