// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpyNOIr1nDcGwfus-U0pNYS04h0DakvpY",
  authDomain: "prysmgrid-f61fc.firebaseapp.com",
  projectId: "prysmgrid-f61fc",
  storageBucket: "prysmgrid-f61fc.firebasestorage.app",
  messagingSenderId: "922672347845",
  appId: "1:922672347845:web:88dd167cc3435a47d38eac",
  measurementId: "G-9CB4PWCEN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics }; 