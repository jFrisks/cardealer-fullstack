import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Fab } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

const HoveringFAB = styled(Fab)`
    position: fixed;
`

export default function CarmodelAddDialog(props) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }


    function handleClose() {
        setOpen(false);
    }

    return (
        <>
            <HoveringFAB variant="secondry" color="secondary" aria-label="delete" onClick={handleClickOpen}>
                <AddIcon />
                Add Carmodel
            </HoveringFAB>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add carmodel</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please write information about carmodel down below.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="brand"
                        label="Brand"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        id="model"
                        label="Model"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        id="price"
                        label="Price"
                        type="number"
                        fullWidth
                    />
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}