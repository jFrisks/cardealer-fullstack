import React from 'react'
import EmployeeCard from '../components/EmployeeCard'
import { Grid, Container, Typography } from '@material-ui/core'

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
                    <EmployeeCard extra={
                        <>
                            <Typography color="textSecondary" gutterBottom>
                                Sales
                            </Typography>
                            <Typography variant="h4" component="p">
                                820 000 kr
                            </Typography>
                        </>
                    }/>
                </Grid>
                
                <Grid item xl={6}>
                    <ModifyUserDialog />
                </Grid>
            </Grid> 
        </Container>
    )
}

export default UserPage