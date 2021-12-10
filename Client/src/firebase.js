import firebase from "firebase/app";
import "firebase/performance";
import "firebase/analytics";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA7HknrGeM6ujwEvdUyfZxdbRby07SXEsk",
  authDomain: "access-denied-dj.firebaseapp.com",
  projectId: "access-denied-dj",
  storageBucket: "access-denied-dj.appspot.com",
  messagingSenderId: "465950756098",
  appId: "1:465950756098:web:f74916f51a73ec487bc61b",
  measurementId: "G-G4V94MPHRS"
});
export default app;
// eslint-disable-next-line
const perf = firebase.performance();
// eslint-disable-next-line
const analytics = firebase.analytics();
export const auth = app.auth();

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID
