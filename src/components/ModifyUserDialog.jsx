import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Fab } from '@material-ui/core';

import BuildIcon from '@material-ui/icons/Build'

export default function ModifyUserDialog(props) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <>
            <Fab variant="extended" aria-label="delete" onClick={handleClickOpen}>
                        <BuildIcon />
                        Change Password or Username
                    </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Modify Your User Info</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        If you want to change your user information, please write your new information below.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}