// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf0rYsUuvB0-oNOMpGrHpDxIjigO4lGko",
  authDomain: "nextapp-17a03.firebaseapp.com",
  projectId: "nextapp-17a03",
  storageBucket: "nextapp-17a03.appspot.com",
  messagingSenderId: "915263147308",
  appId: "1:915263147308:web:97e71d493f9f0ec3883089"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp()
const db  = getFirestore()
const auth  = getAuth()


export default app 
export {auth,db}