import React, {useState} from "react"
import Modal from 'react-modal'
import AddMenuButton from "../component/AddMenuButton"
import { firebaseApp } from "../firebase/config"
import md5 from 'js-md5'

Modal.setAppElement('#root')
const AddMenuModal = () => {
    const [state, setState] = useState({
        description: "",
        price: "",
        shopName: ""
    })
    const [picture, setPicture] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const handlePictureChange = event => {
        setPicture(event.target.files[0])
    }
    
    const registDishInfo = () => {
        if(!state) return

        const hash = md5(state.description + String(new Date()))
        const picrureName = `${hash}.jpg`

        // 登録するファイル名のhashを生成
        const firestoreRef = firebaseApp.firestore().collection("dishInfo")
        firestoreRef
        .add({
            description: state.description,
            picture: picrureName,
            price: state.price,
            shopName: state.shopName
        }).then(() => {
            setState({
                description: "",
                price: "",
                shopName: ""
            })
        }).catch(error => {
            console.error(error)
        })

        if(!picture) return
        const storageRef = firebaseApp.storage().ref().child(picrureName)
        storageRef.put(picture).then(() => {
            alert(" successfully registed !")
            setIsModalOpen(false)
        }).catch(error => {
            console.error(error)
        })
    }

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    }
    return (
        <div>
            <div onClick={() => setIsModalOpen(true)}>
                <AddMenuButton></AddMenuButton>
            </div>
            <Modal
                isOpen={isModalOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => setIsModalOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <p>FILE：
                    <input type="file" name="picture" value={state.picture} onChange={handlePictureChange}/>
                </p>
                <p>DESCRIPTION：
                    <input type="text" name="description" value={state.description} onChange={handleChange}/>
                </p>
                <p>PRICE：
                    <input type="text" name="price" value={state.price} onChange={handleChange}/>
                </p>
                <p>SHOP NAME：
                    <input type="text" name="shopName" value={state.shopName} onChange={handleChange}/>
                </p>
                <button onClick = {registDishInfo}>REGIST</button>
            </Modal>
        </div>
    )
}

export default AddMenuModal