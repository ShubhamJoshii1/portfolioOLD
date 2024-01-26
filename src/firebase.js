import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBngCJOZK-9a1UQzAr052YUAhY6Wlw8jNE",
  authDomain: "portfolio-29a34.firebaseapp.com",
  projectId: "portfolio-29a34",
  storageBucket: "portfolio-29a34.appspot.com",
  messagingSenderId: "327162137036",
  appId: "1:327162137036:web:220ff16057ec79acae7569",
  measurementId: "G-C7TLJ2894H"
};

const app = initializeApp(firebaseConfig);
const storage  = getStorage(app);
const db = getDatabase(app);

export {db,storage}