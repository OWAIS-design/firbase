import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_w7YSIo7NW7q1CwbDBqoEBQW4mPj_Wp8",
  authDomain: "login-1a72e.firebaseapp.com",
  projectId: "login-1a72e",
  storageBucket: "login-1a72e.appspot.com",
  messagingSenderId: "560573180544",
  appId: "1:560573180544:web:1994feefa0480346c69465"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// AUTH
const auth = getAuth();

// Initialize Cloud Firestore
const db = getFirestore();

// Firebase storage
const storage = getStorage();

export {
  ref,
  uploadBytes,
  getDownloadURL,
  storage,
  auth,
  app,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  doc,
  setDoc,
};











