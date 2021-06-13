import React, {useEffect, useState} from "react"
import Dish from "./Dish"
import { firebaseApp } from "../firebase/config"
import { collectionData } from "rxfire/firestore"
/* import "./css/UserTop.css" */
import AddMenuModal from "../component/AddMenuModal"
import EditMenuModal from "../component/EditMenuModal"
import DeleteMenuButton from "../component/DeleteMenuButton"
import LogoutButton from "../component/LogoutButton"

const UserTop = () => {
    const [dishInfo, setDishInfo] = useState([])

    const updateDishInfo = (idx, dishForUpdate) => {
        console.log(idx)
        console.log(dishForUpdate)
        firebaseApp.firestore().collection("dishInfo").doc(idx)
        .update({
            description: dishForUpdate.description,
            price: dishForUpdate.price,
            shopName: dishForUpdate.shopName
        })
    }

    const deleteDishInfo = (idx) => {
        const isOkDelete = window.confirm("Are you sure to delete?")
        if (!isOkDelete) return
        firebaseApp.firestore().collection("dishInfo").doc(idx)
        .delete()
    }

    useEffect(() => {
        console.log("useEffect UserTop")
        const subscription = collectionData(
                firebaseApp.firestore().collection("dishInfo"),
                "idx")
            .subscribe(dishInfo => {
            console.log(dishInfo)
            setDishInfo(dishInfo)
        })
        return () => subscription.unsubscribe()
    }, [])

    return (
        <div className = "">
                <LogoutButton onClick={() => firebaseApp.auth().signOut()}></LogoutButton>
            {dishInfo.map(dish =>
                <div key = {dish.idx}>
                    <Dish dishInfo = {dish}></Dish>
                    <EditMenuModal dishIdx={dish.idx} dishInfo = {dish} onRceivingDishInfoFromModal = {updateDishInfo}></EditMenuModal>

                    <DeleteMenuButton onClick = {() => deleteDishInfo(dish.idx)}></DeleteMenuButton>
                </div>
            )}
            <AddMenuModal></AddMenuModal>
        </div>
    )
}

export default UserTop