import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwr5fnDRJsRcE7_hIHlR5lMN92Z2glmkA",
    authDomain: "imessage-clone-30ffa.firebaseapp.com",
    databaseURL: "https://imessage-clone-30ffa-default-rtdb.firebaseio.com",
    projectId: "imessage-clone-30ffa",
    storageBucket: "imessage-clone-30ffa.appspot.com",
    messagingSenderId: "556050296621",
    appId: "1:556050296621:web:27ed8be1b70608f574ada4",
    measurementId: "G-T9R6B71ND9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;