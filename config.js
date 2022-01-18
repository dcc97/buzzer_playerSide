import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCIr7vnvFGjr5NBWfs_yjvPIDe6okjDmm8",
  authDomain: "wba-anshum.firebaseapp.com",
  databaseURL: "https://wba-anshum-default-rtdb.firebaseio.com",
  projectId: "wba-anshum",
  storageBucket: "wba-anshum.appspot.com",
  messagingSenderId: "278838828417",
  appId: "1:278838828417:web:c48cce38386060a1e7dc80",
  measurementId: "G-GS4DHK11XN"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()