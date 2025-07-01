// Import the functions you need from the SDKs you need
import { initializeApp, getApps  } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADQp11ca3ojmrpDM1Kql-vGCWqudIH40c",
  authDomain: "student-resources-app-b323e.firebaseapp.com",
  projectId: "student-resources-app-b323e",
  storageBucket: "student-resources-app-b323e.firebasestorage.app",
  messagingSenderId: "204569469363",
  appId: "1:204569469363:web:c3b61ae1a6729fd18b6bc6"
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);