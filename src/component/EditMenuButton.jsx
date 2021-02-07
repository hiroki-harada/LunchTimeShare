import React from 'react'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'

const EditMenuButton = () => {
    return (
    <Fab color="secondary" aria-label="edit">
        <EditIcon />
    </Fab>
    )
}

export default EditMenuButton