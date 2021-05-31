import React from "react"
import { withRouter } from "react-router"
import firebase from "firebase/app"
import { firebaseApp } from "../firebase/config"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const Login = () => {

    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: "/usertop",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ]
    }

    return (
        <>
            <h2>PLEASE SIGN IN ...</h2>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
        </>
    )
}


export default withRouter(Login)