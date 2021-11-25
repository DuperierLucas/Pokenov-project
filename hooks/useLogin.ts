import firebase from "firebase/compat";
import { GoogleAuthProvider, getAuth, signInWithRedirect, signOut } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const useLogin = () => {
    function connectWithGoogle() {
        const auth = getAuth();
        signInWithRedirect(auth, provider)
    }

    function logout() {
        const auth = getAuth();
        signOut(auth);
    }

    return {
        connectWithGoogle,
        logout
    }
};

export default useLogin;