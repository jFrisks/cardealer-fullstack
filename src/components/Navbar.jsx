import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const RightFloat = styled.div`
    display: flex;
`
const LeftFloat = styled.div`
    display: flex;
`
const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`

class Navbar extends React.Component{
    render(){
        return (
            <AppBar position="sticky">
                <StyledToolbar>
                    <LeftFloat>
                        <Typography variant="h6">
                            {this.props.title}
                        </Typography>
                        <Button color="inherit" component={Link} to="/carmodels" >Carmodels</Button>
                        <Button color="inherit" component={Link} to="/employees" >Employees</Button>
                        <Button color="inherit" component={Link} to="/user">User</Button>
                    </LeftFloat>

                    <RightFloat >
                        <Button color="inherit" component={Link} to="/register">Register</Button>
                        <Button color="secondary" component={Link} to="/login">Sign In</Button>
                    </RightFloat>
                </StyledToolbar>
            </AppBar>
        )
    }
}

export default Navbar;