import React from "react"
import Dish from "./Dish"
import pict1 from "./pict1.jpg"
import pict2 from "./pict2.jpg"

const UserTop = () => {
    const dishInfo = [
        {
            picture: pict1,
            description: "チキン竜田揚げ定食",
            price: "800円",
            shopName: "hogehoge食堂"
        },
        {
            
            picture: pict2,
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