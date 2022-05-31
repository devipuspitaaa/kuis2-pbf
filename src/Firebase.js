import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDnMQe5G_Npkwtj1wQqt9vBbbnjZDTgIDU",
  authDomain: "kuis2-pbf-f9d90.firebaseapp.com",
  datatbaseURL: "https://kuis2-pbf-f9d90-default-rtdb.firebaseio.com/",
  projectId: "kuis2-pbf-f9d90",
  storageBucket: "kuis2-pbf-f9d90.appspot.com",
  messagingSenderId: "953743702507",
  appId: "1:953743702507:web:39c79ed01186a35a9901ae",
  measurementId: "G-TFEZQP9SGP"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
