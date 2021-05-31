import React from 'react'
import './App.css'
import {
    BrowserRouter, Route, Switch
} from "react-router-dom"
import UserTop from "./page/UserTop"
import Login from "./page/Login"
import {AuthContextProvider, PrivateRoute} from "./firebase/FbAuthProvider"

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <AuthContextProvider>
                    <BrowserRouter>
                        <Switch>
                            <PrivateRoute exact path = {"/usertop"} component = {UserTop}/>
                            <Route exact path = {"/"} component = {Login}/>
                        </Switch>
                    </BrowserRouter>
                </AuthContextProvider>
            </header>
        </div>
    )
}

export default App