import React from 'react'
import EmployeeCard from '../components/EmployeeCard'
import { Grid, Container } from '@material-ui/core'

function EmployeesPage(props) {
    return (
        <div>
            <Container>
                <Grid
                    container
                    spacing={2}
                    justify="center"
                >
                    {[1, 2, 3, 4, 5, 6].map(() => (
                        <Grid item xs={3}>
                            <EmployeeCard />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default EmployeesPage