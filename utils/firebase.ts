import { initializeApp } from 'firebase/app';

export function initFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyATH1EDHQ7Y3RyvqNl_MdJq1DhVwBS39DM",
        authDomain: "marmithon-77171.firebaseapp.com",
        databaseURL: "https://marmithon-77171-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "marmithon-77171",
        storageBucket: "marmithon-77171.appspot.com",
        messagingSenderId: "883072012214",
        appId: "1:883072012214:web:83c311b0d7a7c9bf053b17"
    };

    initializeApp(firebaseConfig);
}

/*
//MAIL
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });


//GOOGLE
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});*/