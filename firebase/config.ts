// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsKqltyU7o9fR_gVA2k2VVZwMSqHRlbOA",
  authDomain: "proyecto-coder-9bc28.firebaseapp.com",
  projectId: "proyecto-coder-9bc28",
  storageBucket: "proyecto-coder-9bc28.appspot.com",
  messagingSenderId: "168442833787",
  appId: "1:168442833787:web:ff0042a63adc7e1389abde"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);