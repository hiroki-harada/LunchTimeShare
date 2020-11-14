import React, {useState} from "react"
import "./css/Dish.css"
// import { firebaseApp } from "../firebase/config"
import firebase from 'firebase';
const Dish = ({dishInfo}) => {

    const [url , setUrl] = useState("")

    const ref = firebase.storage().ref().child(dishInfo.picture)
    ref.getDownloadURL().then(url => {
        let xhr = new XMLHttpRequest()
        xhr.responseType = 'blob'
        // xhr.onload =(event) => {
        //     var blob = xhr.response
        // }
        xhr.open('GET', url)
        xhr.send()
        console.log(url)
        setUrl(url)
    }).catch(err => console.log(err))

    // useEffect(() => {
    // })


    return (
        <div className="dish">
            {/* 編集ボタン クリックで編集用のモーダルを開く*/}
            {/* <button type="submit" value={this.state.buttonMode}></button> */}
            {/* 写真 */}
            <img className="picture" src={url} alt="画像"/>
            <div className="menu-description">
                {/* 説明 と値段*/}
                <p className="description">{dishInfo.description}　　　{dishInfo.price}円</p>
                {/* お店の名前 */}
                <p className="shop-name">{dishInfo.shopName}</p>
            </div>
        </div>
    )
}

export default Dish