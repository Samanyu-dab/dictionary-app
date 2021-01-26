import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBjYZcO_n1Rc-cyPNRN3dDIkywhlTJhMOw",
    authDomain: "attendance-app-b2abf.firebaseapp.com",
    databaseURL: "https://attendance-app-b2abf.firebaseio.com",
    projectId: "attendance-app-b2abf",
    storageBucket: "attendance-app-b2abf.appspot.com",
    messagingSenderId: "410953152194",
    appId: "1:410953152194:web:6595e97575dde82cad6d5b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();