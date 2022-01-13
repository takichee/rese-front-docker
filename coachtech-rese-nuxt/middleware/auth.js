import firebase from 'firebase'

export default function({ store }) {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const userUid = user.uid;
        store.dispatch('auth/setUserInfo', userUid)
        // ...
        } else {
        console.log('User is signed out')
        }
    });
}
