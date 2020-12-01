import React, {useState, useEffect} from "react"
import "./css/Dish.css"
import { firebaseApp } from "../firebase/config"
const Dish = ({dishInfo}) => {
    
    const [url , setUrl] = useState("")
    
    const ref = firebaseApp.storage().ref().child(dishInfo.picture)
    useEffect(() => {
        ref.getDownloadURL().then(url => {
            setUrl(url)
        }).catch(err => console.log(err))
    })

    return (
        <div className="dish">
            {/* 編集ボタン クリックで編集用のモーダルを開く*/}
            {/* <button type="submit" value={this.state.buttonMode}></button> */}
            {/* 写真 */}
            <img className="picture" data-testid="picture" src={url} alt="画像"/>
            <div className="menu-description">
                {/* 説明 と値段*/}
                <p className="description" data-testid="description">{dishInfo.description}　　　{dishInfo.price}円</p>
                {/* お店の名前 */}
                <p className="shop-name" data-testid="shop-name">{dishInfo.shopName}</p>
            </div>
        </div>
    )
}

export default Dish