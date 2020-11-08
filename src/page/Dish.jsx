import React from "react"
import "./css/Dish.css"

const Dish = ({dishInfo, pict}) => {
    return (
        <div className="dish">
            {/* 編集ボタン クリックで編集用のモーダルを開く*/}
            {/* <button type="submit" value={this.state.buttonMode}></button> */}
            {/* 写真 */}
            <img className="picture" src={pict} alt=""/>
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