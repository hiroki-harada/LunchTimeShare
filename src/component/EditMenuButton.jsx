import React from 'react'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'

const EditMenuButton = (props) => {
    return (
    /* eslint-disable-next-line react/prop-types */
    <Fab color="secondary" aria-label="edit" onClick={props.onClick}>
        <EditIcon />
    </Fab>
    )
}

export default EditMenuButton