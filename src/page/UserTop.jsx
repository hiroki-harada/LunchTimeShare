import React, {useEffect, useState} from "react"
import Dish from "./Dish"
import { firebaseApp } from "../firebase/config"
import { collectionData } from "rxfire/firestore"
// import "./css/UserTop.css"
import AddMenuModal from "../component/AddMenuModal"

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
                    <Dish dishInfo = {dish}></Dish>
                </div>
            )}
            <AddMenuModal></AddMenuModal>
        </div>
    )
}

export default UserTop