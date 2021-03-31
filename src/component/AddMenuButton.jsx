import React from 'react'
import Fab from '@material-ui/core/Fab'
const AddMenuButton = () => {
    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed'
    }
    return (
        /* eslint-disable-next-line react/no-children-prop */
        <Fab children="＋" color="primary" aria-label="add" className="add-dish" style={style}>
        </Fab>
    )
}
export default AddMenuButton