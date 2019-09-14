import React from 'react'
import EmployeeCard from '../components/EmployeeCard'
import { Grid, Container } from '@material-ui/core'
function EmployeesPage(props) {

    return (
        <div>
            <Grid container spacing={2} justify="center" >
                {[1, 2, 3, 4].map(() => (
                    <Grid item lg={6}>
                        <EmployeeCard />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default EmployeesPage