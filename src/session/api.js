import {auth, providers} from '../firebase';
export default {
    signIn: () => auth.signInWithPopup(providers.google),
    signOut:() => auth.signOut(),
    onchange: (callback) => auth.onAuthStateChanged(callback)
}
