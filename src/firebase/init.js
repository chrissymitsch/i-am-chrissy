import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  // apiKey: "AIzaSyC-yUaJ6t9UZFvokCQ5jRczfZwERp9KIIw",
  // authDomain: "hello-i-am-online.firebaseapp.com",
  // databaseURL: "https://hello-i-am-online.firebaseio.com",
  // projectId: "hello-i-am-online",
  // storageBucket: "hello-i-am-online.appspot.com",
  // messagingSenderId: "513490695674",
  // appId: "1:513490695674:web:259956a2e558bdde512043",
  // measurementId: "G-DB9RBT21K7"

  apiKey: "AIzaSyA5k0hnZUKBtDY5kL_dQlgl8BSJcwhCdm8",
  authDomain: "cm-cvonline.firebaseapp.com",
  databaseURL: "https://cm-cvonline.firebaseio.com",
  projectId: "cm-cvonline",
  storageBucket: "cm-cvonline.appspot.com",
  messagingSenderId: "706949489523",
  appId: "1:706949489523:web:1500758107173330de1b06",
  measurementId: "G-MGBK2JSWKG"

};

firebase.initializeApp(config);
