
// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import * as authProvider from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyATH1EDHQ7Y3RyvqNl_MdJq1DhVwBS39DM",
        authDomain: "marmithon-77171.firebaseapp.com",
        databaseURL: "https://marmithon-77171-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "marmithon-77171",
        storageBucket: "marmithon-77171.appspot.com",
        messagingSenderId: "883072012214",
        appId: "1:883072012214:web:83c311b0d7a7c9bf053b17"
    };

// Initialize Firebase
    let app;
    if (firebase.apps.length === 0) {
        app = firebase.initializeApp(firebaseConfig);
    } else {
        app = firebase.app()
    }

    const auth = firebase.auth()

    export { auth, authProvider };