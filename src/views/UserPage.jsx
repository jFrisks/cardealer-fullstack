import React from 'react'
import EmployeeCard from '../components/EmployeeCard'
import { Grid, Container } from '@material-ui/core'

import ModifyUserDialog from '../components/ModifyUserDialog'

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
                    <ModifyUserDialog />
                </Grid>
            </Grid> 
        </Container>
    )
}

export default UserPage