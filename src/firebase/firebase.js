// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs1y2-cugDaedHrWyIjnGPZiyP44vdTGA",
  authDomain: "portfolio-bayu.firebaseapp.com",
  projectId: "portfolio-bayu",
  storageBucket: "portfolio-bayu.firebasestorage.app",
  messagingSenderId: "147805613592",
  appId: "1:147805613592:web:d74c9153e7cd3655a95d6d",
  measurementId: "G-JM2BKHCKXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
