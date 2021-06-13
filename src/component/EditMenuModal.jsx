import React, {useEffect, useState} from "react"
import Modal from 'react-modal'
import EditMenuButton from "./EditMenuButton"

Modal.setAppElement('#root')
const EditMenuModal = props => {
    /* eslint-disable react/prop-types */
    const {dishIdx, dishInfo, onRceivingDishInfoFromModal} = props

    const [dishOnModal, setDishOnModal] = useState({
        description: "",
        price: "",
        shopName: "",

    })
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleChange = event => {
        setDishOnModal({ ...dishOnModal, [event.target.name]: event.target.value })
    }

    const readDishInfoToModal = () => {
        setDishOnModal({
            description: dishInfo.description,
            price: dishInfo.price,
            shopName: dishInfo.shopName
        })
    }

    const sendDishInfoToUserTop = () => {
        console.log(dishIdx)
        console.log(dishOnModal)
        onRceivingDishInfoFromModal(dishIdx, dishOnModal)
        setIsModalOpen(false)
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
            <EditMenuButton onClick={() => setIsModalOpen(true)}></EditMenuButton>
            
            <Modal
                isOpen={isModalOpen}
                onAfterOpen={readDishInfoToModal}
                onRequestClose={() => setIsModalOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <p>DESCRIPTION：
                    <input type="text" name="description" value={dishOnModal.description} onChange={handleChange}/>
                </p>
                <p>PRICE：
                    <input type="text" name="price" value={dishOnModal.price} onChange={handleChange}/>
                </p>
                <p>SHOP NAME：
                    <input type="text" name="shopName" value={dishOnModal.shopName} onChange={handleChange}/>
                </p>
                <button onClick = {sendDishInfoToUserTop}>UPDATE</button>
            </Modal>
        </div>
    )
}

export default EditMenuModal