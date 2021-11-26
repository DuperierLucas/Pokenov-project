import * as firebase from 'firebase';

    const firebaseConfig = {
        apiKey: "AIzaSyATH1EDHQ7Y3RyvqNl_MdJq1DhVwBS39DM",
        authDomain: "pokenov-77171.firebaseapp.com",
        databaseURL: "https://pokenov-77171-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "pokenov-77171",
        storageBucket: "pokenov-77171.appspot.com",
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
    export { auth };