
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAfRH-YYU3P2YtNsXmHH6RnAW0NDNuAZZE",
    authDomain: "realestate-1adb0.firebaseapp.com",
    projectId: "realestate-1adb0",
    storageBucket: "realestate-1adb0.appspot.com",
    messagingSenderId: "69773238416",
    appId: "1:69773238416:web:1f661357b5bbcfebf9b815"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);