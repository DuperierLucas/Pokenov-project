import { initializeApp } from 'firebase/app';

function initFirebase() {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: 'AIzaSyATH1EDHQ7Y3RyvqNl_MdJq1DhVwBS39DM',
        authDomain: 'marmithon-77171.firebaseapp.com',
        databaseURL: 'https://marmithon-77171-default-rtdb.europe-west1.firebasedatabase.app/',
        storageBucket: 'project-id.appspot.com',
    };

    initializeApp(firebaseConfig);
}