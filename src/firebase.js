import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8tWXY5FABwDEez9rodgKLVE42THXD4B8",
    authDomain: "disney-clone-e6857.firebaseapp.com",
    projectId: "disney-clone-e6857",
    storageBucket: "disney-clone-e6857.appspot.com",
    messagingSenderId: "355510228473",
    appId: "1:355510228473:web:546d71c1d77289e8999928"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { provider, auth }