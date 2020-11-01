import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Dish from './page/Dish'

const App = () => {
    const dishInfo = {
        description: "チキン竜田揚げ定食",
        price: "800円",
        shopName: "hogehoge食堂"
    }
    return (
        <div className="App">
            <Dish dishInfo = {dishInfo}></Dish>
        </div>
    )
}

export default App
