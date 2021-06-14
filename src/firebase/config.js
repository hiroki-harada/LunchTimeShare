import { initializeApp } from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyAhP_UH7ajozdU1T3fmDks83HMEp6SQyS4",
    authDomain: "lunchstocker.firebaseapp.com",
    databaseURL: "https://lunchstocker.firebaseio.com",
    projectId: "lunchstocker",
    storageBucket: "lunchstocker.appspot.com",
    messagingSenderId: "724552410626",
    appId: "1:724552410626:web:6b6a6f82475726df01691b",
    measurementId: "G-7W0V0ZJLV9"
});
// auth().onAuthStateChanged(user => {
//     if (!user) {
//         firebaseApp.auth().signInAnonymously()
//     }
// })

// firestore().settings({ timestampsInSnapshots: true })

// firestore()
//     .enablePersistence({ experimentalTabSynchronization: true })
//     .catch((err) => {
//         console.error(err)
//     })
