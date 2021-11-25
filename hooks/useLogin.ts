import {auth, authProvider} from "../utils/firebase";


const useLogin = () => {
    function connectWithGoogle() {
        auth.signInWithPopup(auth, auth.provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = auth.GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = auth.GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    function connectWithEmail(email: string, password: string) {
        console.log(email)
        auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        auth.signOut();
    }

    return {
        connectWithGoogle,
        connectWithEmail,
        logout
    }
};

export default useLogin;