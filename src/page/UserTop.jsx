import React, {useEffect, useState} from "react"
import Dish from "./Dish"
import { firebaseApp } from "../firebase/config"
import { collectionData } from "rxfire/firestore"
// import pict2 from "./pict2.jpg"

const UserTop = () => {
    const [dishInfo, setDishInfo] = useState([])

    const query = firebaseApp.firestore().collection("dishInfo")
    useEffect(() => {
        const subscription = collectionData(query, "idx").subscribe(dishInfo => {
            setDishInfo(dishInfo)
        })
        return () => subscription.unsubscribe()
    })


    return (
        <div className = "">
            {dishInfo.map(dish =>
                <div key = {dish.idx}>
                    {/* {console.log(dish)} */}
                    <Dish dishInfo = {dish}></Dish>
                </div>
            )}
        </div>
    )
}

export default UserTop