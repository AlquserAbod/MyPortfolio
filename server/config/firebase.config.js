// firebaseConfig.js

const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");


// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJj4QnBjSUh2JrZBOEd0hyd-pAap63iBE",
    authDomain: "portfolio-1d9d4.firebaseapp.com",
    projectId: "portfolio-1d9d4",
    storageBucket: "portfolio-1d9d4.appspot.com",
    messagingSenderId: "109226089632",
    appId: "1:109226089632:web:4df672941c7d71b261fdc5",
    measurementId: "G-487PP58ZNK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

module.exports = { storage };
