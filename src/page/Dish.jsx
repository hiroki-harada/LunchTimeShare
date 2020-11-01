import React from "react"

const Dish = ({dishInfo}) => {
    // const [description, setDescription] = useState("")
    // const [price, setPrice] = useState("")
    // const [shopName, setShopName] = useState("")
    // // const [buttonMode, setButtonMode] = useState("")

    // useEffect(() => {
    //     setDescription("チキン竜田揚げ定食")
    //     setPrice("800円")
    //     setShopName("hogehoge食堂")
    //     return
    // }, [])

    return (
        <div>
            {/* 編集ボタン クリックで編集用のモーダルを開く*/}
            {/* <button type="submit" value={this.state.buttonMode}></button> */}
            <div className="picture">
                {/* 写真 */}
                <img className="picture" src="" alt=""/>
            </div>
            <div className="menu-description">
                {/* 説明 */}
                <p className="description">{dishInfo.description}</p>
                {/* 値段 */}
                <p className="price">{dishInfo.price}</p>
                {/* お店の名前 */}
                <p className="shop-name">{dishInfo.shopName}</p>
            </div>
        </div>
    )
}

export default Dish