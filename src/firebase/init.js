import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyC-yUaJ6t9UZFvokCQ5jRczfZwERp9KIIw",
  authDomain: "hello-i-am-online.firebaseapp.com",
  databaseURL: "https://hello-i-am-online.firebaseio.com",
  projectId: "hello-i-am-online",
  storageBucket: "hello-i-am-online.appspot.com",
  messagingSenderId: "513490695674",
  appId: "1:513490695674:web:259956a2e558bdde512043",
  measurementId: "G-DB9RBT21K7"
};

firebase.initializeApp(config);
