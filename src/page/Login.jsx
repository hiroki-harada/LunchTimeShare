import React from "react"
import firebase from "firebase/app"
import { firebaseApp } from "../firebase/config"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const Login = () => {

    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/signedIn',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ]
    }

    return (
        <>
            <h2>LOGIN</h2>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
        </>
    )
}


export default Login