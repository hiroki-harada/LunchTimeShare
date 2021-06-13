import React from 'react'
import Fab from '@material-ui/core/Fab'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const LogoutButton = (props) => {
    return (
    /* eslint-disable-next-line react/prop-types */
    <Fab color="secondary" aria-label="edit" onClick={props.onClick}>
        <ExitToAppIcon/>
    </Fab>
    )
}

export default LogoutButton