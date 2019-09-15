import React from 'react';
import firebase from '../firebase.js'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class UserLoginDialog extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            password: '',
            email: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit() {
        const sumbission = {
            password: this.state.password,
            email: this.state.email
        }

        try{
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            this.props.history.goBack()
        }catch(e){
            console.error(e)
        }
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
                <Dialog open onClose={this.props.history.goBack} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please write information to login.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            onChange={(e) => this.handleChange(e, 'email')}
                        />
                        <TextField
                            autoFocus
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            onChange={(e) => this.handleChange(e, 'password')}
                        />
                    </DialogContent>
                    
                    <DialogActions>
                        <Button onClick={this.props.history.goBack} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Login
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}