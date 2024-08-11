// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCLw2brw5UaFpiF8TLK3G5lFI-dCCKXtM",
  authDomain: "inventory-management-37db5.firebaseapp.com",
  projectId: "inventory-management-37db5",
  storageBucket: "inventory-management-37db5.appspot.com",
  messagingSenderId: "922659147897",
  appId: "1:922659147897:web:1b0ab607e524da86edc4a8",
  measurementId: "G-04LTDDZN2C"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)                
const firestore = getFirestore(app)

export {firestore}