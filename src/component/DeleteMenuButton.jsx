import React from 'react'
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete'

const DeleteMenuButton = () => {
    return (
    <Fab color="secondary" aria-label="edit">
        <DeleteIcon />
    </Fab>
    )
}

export default DeleteMenuButton