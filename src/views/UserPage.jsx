import React, {useContext} from 'react'

import {AuthContext} from '../components/Auth'
import EmployeeCard from '../components/EmployeeCard'
import { Grid, Container, Typography, Paper, Fab, Link, Button } from '@material-ui/core'

import ModifyUserDialog from '../components/ModifyUserDialog'
import total_sales from '../testData/total_sales'

function UserPage(props) {
    const auth = useContext(AuthContext)

    function renderGuestOrEmployee(){
        return auth.currentUser ? (
            <EmployeeCard data={total_sales} extra={
                <>
                    <Typography color="textSecondary" gutterBottom>
                        Sales
                    </Typography>
                    <Typography variant="h4" component="p">
                        {total_sales.sales} kr
                    </Typography>
                </>
            }/>
        ) : (
            <Paper>
                <Typography variant="h5" component="h3">
                Welcome Guest!
                </Typography>
                <Typography component="p">
                To see your employee stats, please login
                </Typography>
            </Paper>
        )
        
    }

    function renderLoginOrModify(){
        return (
            auth.currentUser ? (
                <>
                    <ModifyUserDialog />
                    <Typography color="textSecondary" gutterBottom>
                        {auth.currentUser ? 'logged in with ' + auth.currentUser.email : 'Not logged in'}
                    </Typography>
                </>
            ) : (<></>)
        )
    }

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
                    {renderGuestOrEmployee()}
                </Grid>
                
                <Grid item xl={6}>
                    {renderLoginOrModify()}
                </Grid>
            </Grid> 
        </Container>
    )
}

export default UserPage