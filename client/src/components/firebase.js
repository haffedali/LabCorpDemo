import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: 'AIzaSyA6RIfEDo0UjDG7KHbCaMPEIGgrRcEdvVA',
//   authDomain: 'micnight-9b383.firebaseapp.com',
//   databaseURL: 'https://micnight-9b383.firebaseio.com',
//   projectId: 'micnight-9b383',
//   storageBucket: 'micnight-9b383.appspot.com',
//   messagingSenderId: '318590627497',
//   appId: '1:318590627497:web:0b4d207c91bc0cb8cd83b8',
//   measurementId: 'G-W7Y1FZG0PH',
// };

const firebaseConfig = {
    apiKey: "AIzaSyCu4JOu9qi47Regf9tz8Pxbao3_7zO_4us",
    authDomain: "labcorpdemo.firebaseapp.com",
    projectId: "labcorpdemo",
    storageBucket: "labcorpdemo.appspot.com",
    messagingSenderId: "493197081455",
    appId: "1:493197081455:web:4fabd6f0d958e11c65069a"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;


