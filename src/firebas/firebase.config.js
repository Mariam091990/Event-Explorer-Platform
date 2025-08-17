// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD12DYNinN49WAlsqEojKUDY1SOzdxq4VQ",
  authDomain: "event-explorer-12036.firebaseapp.com",
  projectId: "event-explorer-12036",
  storageBucket: "event-explorer-12036.firebasestorage.app",
  messagingSenderId: "1097353987059",
  appId: "1:1097353987059:web:560341738ed99812324886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;