import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import CardealerAPIURL from '../data/CardealerAPI'

import {AuthContext} from '../components/Auth'
import EmployeeCard from '../components/EmployeeCard'
import { Grid, Container, Typography, Paper, Fab, Link, Button } from '@material-ui/core'

import ModifyUserDialog from '../components/ModifyUserDialog'
import total_sales from '../testData/total_sales'

function UserPage(props) {
    const auth = useContext(AuthContext)
    const [employee, setEmployee] = useState(null)

    useEffect(() => {
        getEmployeeWithSales()
    })
    function getEmployeeWithSales(){
        axios.get(CardealerAPIURL.total_sales)
            .then(res => {
                const employee = res.data.find(employee => employee.name === auth.currentUser.displayName)
                setEmployee(employee)
            })
            .catch(err => console.error(err))
        
    }

    function renderGuestOrEmployee(){
        return auth.currentUser && employee ? (
            <EmployeeCard data={employee} extra={
                <>
                    <Typography color="textSecondary" gutterBottom>
                        Sales
                    </Typography>
                    <Typography variant="h4" component="p">
                        {employee.sales} kr
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
            </Grid> 
        </Container>
    )
}

export default UserPage