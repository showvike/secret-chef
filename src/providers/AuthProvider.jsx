/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
      setLoading(false);
    });
  }, []);

  const signIn = (auth, email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const popUpSignIn = (auth, provider) => signInWithPopup(auth, provider);

  const registerUser = (auth, email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const updateUser = (user, data) => updateProfile(user, data);

  const logOut = (auth) => signOut(auth);

  const value = {
    user,
    loading,
    auth,
    googleProvider,
    githubProvider,
    signIn,
    popUpSignIn,
    registerUser,
    updateUser,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
