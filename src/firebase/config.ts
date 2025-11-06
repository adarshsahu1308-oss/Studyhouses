// // Firebase configuration - Add your Firebase config here
// import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// // Replace with your Firebase config
// const firebaseConfig = {
//   // Your Firebase configuration will go here
//   apiKey:import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGE_SEND_ID,
//   appId:import.meta.env.VITE_APP_ID
// };

// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-nEvfvPc-PazYJN7zUDH8hvQ1NcQpaBk",
  authDomain: "study-house-61798.firebaseapp.com",
  projectId: "study-house-61798",
  storageBucket: "study-house-61798.firebasestorage.app",
  messagingSenderId: "751464751197",
  appId: "1:751464751197:web:f7afe3f6e97d88b4fd6db4",
  measurementId: "G-4VCB1G7WPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

export default app;