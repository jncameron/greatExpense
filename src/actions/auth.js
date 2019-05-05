import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  githubAuthProvider
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

export const startLoginGithub = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(githubAuthProvider)
      .then(function(result) {
        let token = result.credential.accessToken;
        let user = result.user;
      })
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
      });
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
