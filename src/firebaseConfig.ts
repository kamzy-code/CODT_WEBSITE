import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJkyIdrh6wnSoqeNnYKe_wD3Lpp1jXKoA",
  authDomain: "codt-website-d5754.firebaseapp.com",
  projectId: "codt-website-d5754",
  storageBucket: "codt-website-d5754.firebasestorage.app",
  messagingSenderId: "463751629924",
  appId: "1:463751629924:web:ab8abd9fe08a53ae30a371",
  measurementId: "G-3765GC17MG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const storage = getStorage(app);