import React from 'react'
import EmployeeCard from '../components/EmployeeCard'
import { Fab, Grid, Container } from '@material-ui/core'

import BuildIcon from '@material-ui/icons/Build'

function UserPage(props) {
    return (
        <Container>
            <Grid
                container
                spacing={2}
                justify="center"
                alignItems="center"
                alignContent="center"
            >
                <Grid item xs={12}>
                    <EmployeeCard />
                </Grid>
                
                <Grid item xl={6}>
                    <Fab variant="extended" aria-label="delete">
                        <BuildIcon />
                        Change Password or Username
                    </Fab>
                </Grid>
            </Grid> 
        </Container>
    )
}

export default UserPage