import { initializeApp, firestore } from "firebase/app"
import "firebase/firestore"

export const firebaseApp = initializeApp({
  apiKey: process.env.local.REACT_APP_API_KEY,
  authDomain: process.env.local.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.local.REACT_APP_DATABASE_URL,
  projectId: process.env.local.REACT_APP_PROJECT_ID,
  storageBucket: process.env.local.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.local.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.local.REACT_APP_APP_ID,
  measurementId: process.env.local.REACT_APP_MEASUREMENT_ID
});

firestore().settings({ timestampsInSnapshots: true })

firestore()
  .enablePersistence({ experimentalTabSynchronization: true })
  .catch((err) => {
    console.error(err)
  })
