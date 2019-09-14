import React from 'react'
import { Container, Grid } from '@material-ui/core'
import CarmodelCard from '../components/CarmodelCard'
import CarmodelAddDialog from '../components/CarmodelAddDialog'

function CarmodelsPage(props) {
    return (
        <div>
            <Container>
                <Grid
                    container
                    spacing={2}
                    justify="center"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
                        <Grid item xs={12} lg={3} sm={6}>
                            <CarmodelCard />
                        </Grid>
                    ))}
                    <CarmodelAddDialog />
                </Grid>
            </Container>
        </div>
    )
}

export default CarmodelsPage