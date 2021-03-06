import React from 'react';
import styled from 'styled-components';
import firebase from '../firebase'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class UserRegisterDialog extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            password: '',
            email: '',
            name: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit() {
        const sumbission = {
            password: this.state.password,
            email: this.state.email,
            name: this.state.name
        }

        try{
            const usercred = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            const user = usercred.user
            await user.updateProfile({
                displayName: this.state.name
            })
            //TODO - add name parameter when registering
            console.log('created user (without name) as: ', sumbission)
            this.props.history.goBack()
        }catch(e){
            console.error(e)
        }

        //TODO
        console.log('Wanted to register user with: ', sumbission)
        this.props.history.goBack()
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
                    <DialogTitle id="form-dialog-title">Register</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please write information to register.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            id="name"
                            label="Name"
                            type="name"
                            fullWidth
                            onChange={(e) => this.handleChange(e, 'name')}
                        />
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
                            Register
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}