import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCbqE0R89gh3ZCP90Q_euqoF-NTjiIe0Aw",
  authDomain: "qpixel-3e00e.firebaseapp.com",
  projectId: "qpixel-3e00e",
  storageBucket: "qpixel-3e00e.appspot.com",
  messagingSenderId: "802958044759",
  appId: "1:802958044759:web:af91fb4d3390fd2faabd12"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);