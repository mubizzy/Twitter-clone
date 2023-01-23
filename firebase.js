// Import the functions you need from the SDKs y ou need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v1-b2008.firebaseapp.com",
  projectId: "twitter-v1-b2008",
  storageBucket: "twitter-v1-b2008.appspot.com",
  messagingSenderId: "971482729443",
  appId: "1:971482729443:web:3668cfbe2adcf22c4faed6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
