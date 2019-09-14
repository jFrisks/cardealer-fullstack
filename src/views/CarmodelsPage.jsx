import React from 'react'
import { Container, Grid } from '@material-ui/core'
import CarmodelCard from '../components/CarmodelCard'

function CarmodelsPage(props) {
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
                            <CarmodelCard />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default CarmodelsPage