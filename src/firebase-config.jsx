// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxoQpb6cBifd3udo8VrmfpJdHE9x39Kx0",
  authDomain: "dashboard144-3f17d.firebaseapp.com",
  projectId: "dashboard144-3f17d",
  storageBucket: "dashboard144-3f17d.appspot.com",
  messagingSenderId: "752020469385",
  appId: "1:752020469385:web:0fb2c6683d55058a18f858",
  measurementId: "G-JBNN61TVX0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

