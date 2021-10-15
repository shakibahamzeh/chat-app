import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyA6OgzA6YQD3kPZZH49xRrzKHBR1nT3Bf0",
  authDomain: "chatgram-c11ef.firebaseapp.com",
  projectId: "chatgram-c11ef",
  storageBucket: "chatgram-c11ef.appspot.com",
  messagingSenderId: "568494102772",
  appId: "1:568494102772:web:6bf0ec0fbc3696cd9ba6a1"
}).auth();