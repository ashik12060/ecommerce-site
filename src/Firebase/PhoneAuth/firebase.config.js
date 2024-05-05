
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkNzoZLDu8JwCXHh3OJk020-Q7Hz5OK9g",
  authDomain: "simple-firebase-cac87.firebaseapp.com",
  projectId: "simple-firebase-cac87",
  storageBucket: "simple-firebase-cac87.appspot.com",
  messagingSenderId: "660458395972",
  appId: "1:660458395972:web:c7b2defa7591148ec91f11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
