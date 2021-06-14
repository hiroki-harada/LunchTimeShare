import React, { useState, useEffect, createContext, useContext } from 'react'
import { Route } from "react-router-dom"
import Login from "../page/Login"
import { firebaseApp } from "../firebase/config"


/* Contextオブジェクトを作成 */
export const AuthContext = createContext()

/* eslint-disable-next-line react/prop-types */
export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(setCurrentUser)
    }, [])

    return (
        /* valueに子コンポーネントで使いたい変数や関数を与える */
        <AuthContext.Provider
            value = {{
                currentUser
            }}
        >
            {/* Providerで子コンポーネントをラップする */}
            { children }
        </AuthContext.Provider>
    )
}

/* eslint-disable-next-line react/prop-types */
export const PrivateRoute = ({ component: RouteComponent, ...options }) => {

    /* AuthContextからcurrentUserを取り出す */
    const { currentUser } = useContext(AuthContext)

    /* ログイン済ならcomponentで指定したコンポーネントを、そうでないならLogin画面へ遷移 */
    const renderdComponent = currentUser ? RouteComponent : Login
    return <Route { ...options } component = { renderdComponent } />
}