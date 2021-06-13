import React from 'react'
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete'

const DeleteMenuButton = (props) => {
    return (
    /* eslint-disable-next-line react/prop-types */
    <Fab color="secondary" aria-label="edit" onClick={props.onClick}>
        <DeleteIcon />
    </Fab>
    )
}

export default DeleteMenuButton