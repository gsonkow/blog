// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF_beAH5_4465oppAP_EuVvjHbCLIbxMw",
  authDomain: "blog-d6137.firebaseapp.com",
  projectId: "blog-d6137",
  storageBucket: "blog-d6137.appspot.com",
  messagingSenderId: "31153500412",
  appId: "1:31153500412:web:16abe320f0985aff466779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
