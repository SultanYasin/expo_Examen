import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBWI1ofL1DErfKQUIijgxdoF3QdtzN3Ols",
    authDomain: "fitness-4b5cc.firebaseapp.com",
    projectId: "fitness-4b5cc",
    storageBucket: "fitness-4b5cc.appspot.com",
    messagingSenderId: "721747822830",
    appId: "1:721747822830:web:088b62c1a841e72fdacbff",
    measurementId: "G-RTT0PPYCQL"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}



/* 
  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWI1ofL1DErfKQUIijgxdoF3QdtzN3Ols",
    authDomain: "fitness-4b5cc.firebaseapp.com",
    projectId: "fitness-4b5cc",
    storageBucket: "fitness-4b5cc.appspot.com",
    messagingSenderId: "721747822830",
    appId: "1:721747822830:web:088b62c1a841e72fdacbff",
    measurementId: "G-RTT0PPYCQL"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);
   */