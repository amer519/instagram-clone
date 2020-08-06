
import firebase from "firebase";

    const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyA7PbINx_0NKGK3bYwN1B0L1se_z2MBgP0",
        authDomain: "instagram-clone-756a5.firebaseapp.com",
        databaseURL: "https://instagram-clone-756a5.firebaseio.com",
        projectId: "instagram-clone-756a5",
        storageBucket: "instagram-clone-756a5.appspot.com",
        messagingSenderId: "1099093303648",
        appId: "1:1099093303648:web:51940bea2d4435e5f0be05"
    });

    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const storage = firebase.storage();

    export { db, auth, storage };

    // export default firebaseConfig;


