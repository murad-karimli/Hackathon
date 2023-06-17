
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAfUddg5qunUJOFRFxEw8ijmfy4CHnXxFE",
  authDomain: "reportapp-ead20.firebaseapp.com",
  projectId: "reportapp-ead20",
  storageBucket: "reportapp-ead20.appspot.com",
  messagingSenderId: "753378489989",
  appId: "1:1061149473659:android:06bac361f68ff76ab41bde",
  measurementId: "G-ZLHFQ4J6J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db