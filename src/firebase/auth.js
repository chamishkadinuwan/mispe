import { auth } from "./firebase";
import { db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const doCreateUserWithEmailAndPassword = async (email, password, userData) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
  // Add user to Firestore
  await setDoc(doc(db, "users", userCredential.user.uid), {
    ...userData,
    createdAt: new Date(),
    emailVerified: false
  });
  
  return userCredential;
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  
  // Add user to Firestore if first time
  await setDoc(doc(db, "users", user.uid), {
    name: user.displayName,
    email: user.email,
    createdAt: new Date(),
    emailVerified: user.emailVerified,
    role: "user"
  }, { merge: true });
  
  return result;
};

export const doSignOut = () => {
  return auth.signOut();
};