import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class CarmodelAddDialog extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            brand: '',
            model: '',
            price: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        const sumbission = {
            brand: this.state.brand,
            model: this.state.model,
            price: this.state.price
        }

        this.props.onAdd(sumbission)
        console.log('Submitted: ', sumbission)
    }

    handleChange(event, type) {
        //console.log('changed ' + type + ' to: ' + event.target.value)
        this.setState({
            [type]: event.target.value
        })
    }

    render(){
        return (
            <>
                <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
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
                            onChange={(e) => this.handleChange(e, 'brand')}
                        />
                        <TextField
                            autoFocus
                            id="model"
                            label="Model"
                            type="text"
                            fullWidth
                            onChange={(e) => this.handleChange(e, 'model')}
                        />
                        <TextField
                            autoFocus
                            id="price"
                            label="Price"
                            type="number"
                            fullWidth
                            onChange={(e) => this.handleChange(e, 'price')}
                        />
                    </DialogContent>
                    
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}