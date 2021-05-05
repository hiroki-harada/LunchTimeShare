import React from 'react'
import './App.css'
import {
    BrowserRouter, Route, Switch
} from "react-router-dom"
import UserTop from "./page/UserTop"

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component = {UserTop}/>
                    </Switch>
                </BrowserRouter>
            </header>
        </div>
    )
}

export default App