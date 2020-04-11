import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBO5XHIHAj4ImOG_aP_eDh7FQbHYOiG4cs",
  authDomain: "ninja-smoothies-april.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-april.firebaseio.com",
  projectId: "ninja-smoothies-april",
  storageBucket: "ninja-smoothies-april.appspot.com",
  messagingSenderId: "924276771355",
  appId: "1:924276771355:web:ceb20bab1671d1d7c6c6be"
};
// Initialize Firebase
/* Reason taht we are going to do that is because we don't want to initialize the Firestore function on this firebase app,
because Firestor remember is our database we need to initialize them. So first of all important at the top will say imort store from and then it's fire base from ....*/
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Zbog neke zajebancije mozda treba mozda ne..
firebaseApp.firestore().settings({ timestampsInSnapshots:true })

//Export firestore database // Pogledati 9. Instaling Firebase i 10...
export default firebaseApp.firestore()