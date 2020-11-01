import React, {useEffect, useState} from "react"
import Dish from "./Dish"

const UserTop = () => {
    const dishInfo = [
        {
            description: "チキン竜田揚げ定食",
            price: "800円",
            shopName: "hogehoge食堂"
        },
        {
            description: "トンカツ定食",
            price: "850円",
            shopName: "fugafugaキッチン"
        }
    ]

    return (
        <div className = "">
            {dishInfo.map(dish =>
                <div key = {dish}>
                    <Dish dishInfo = {dish}></Dish>
                </div>
            )}
        </div>
    )
}

export default UserTop