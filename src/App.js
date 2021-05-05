import React from 'react'
import './App.css'
import {
    BrowserRouter, Route, Switch
} from "react-router-dom"
import UserTop from "./page/UserTop"
import Login from "./page/Login"

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Switch>
                        <Route exact path = "/" component = {UserTop}/>
                        <Route exact path = "/login" component = {Login}/>
                    </Switch>
                </BrowserRouter>
            </header>
        </div>
    )
}

export default App