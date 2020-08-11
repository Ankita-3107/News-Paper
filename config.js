 import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAkxWr7bLRMm-eCsDfqCWb_K5ECDa84fYw",
  authDomain: "news-paper-446d0.firebaseapp.com",
  databaseURL: "https://news-paper-446d0.firebaseio.com",
  projectId: "news-paper-446d0",
  storageBucket: "news-paper-446d0.appspot.com",
  messagingSenderId: "371096516593",
  appId: "1:371096516593:web:9413a3c1298b032c8b3650",
  measurementId: "G-8C8JZ5VW52"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();