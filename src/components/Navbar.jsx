import React from 'react'
import {Link} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

class Navbar extends React.Component{
    render(){
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        {this.props.title}
                    </Typography>
                    <Button color="inherit" Component={Link} to="/carmodels" >Carmodels</Button>
                    <Button color="inherit" Component={Link} to="/employees" >Employees</Button>
                    <Button color="inherit" Component={Link} to="/user">Users</Button>
                    <Link to="/employees/" Component={Button}>HEJ</Link>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar;