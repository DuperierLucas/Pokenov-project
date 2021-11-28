import { auth } from '../utils/firebase';
import * as GoogleSignIn from 'expo-google-sign-in';

const useLogin = () => {
    function connectWithEmail(email: string, password: string) {
        console.log(email);
        auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        auth.signOut();
    }

    const initAsync = async () => {
        await GoogleSignIn.initAsync({});
        syncUserWithStateAsync();
    };

    const syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();
        console.log(user);
    };

    const signOutAsync = async (id: string | number | null = null) => {
        await GoogleSignIn.signOutAsync();
    };

    const connectWithGoogle = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            if (type === 'success') {
                syncUserWithStateAsync();
            }
            console.log(user);
        } catch ({ message }) {
            alert('login: Error:' + message);
        }
    };

    return {
        connectWithGoogle,
        connectWithEmail,
        logout,
    };
};

export default useLogin;
