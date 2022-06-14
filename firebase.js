import {initializeApp, getApp, getApps} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCt4lNuRV94BNJ5zKX2SPpLaEw1LEIibzE",
    authDomain: "insta-f386f.firebaseapp.com",
    projectId: "insta-f386f",
    storageBucket: "insta-f386f.appspot.com",
    messagingSenderId: "1029843386175",
    appId: "1:1029843386175:web:c57df3689b89a4a1ea5d8a",
    measurementId: "G-JSLCD5VTJD"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };