import React from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'

function EmployeeCard() {
    const bull = <span>•</span>;
    return(
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                be
                {bull}
                nev
                {bull}o{bull}
                lent
                </Typography>
                <Typography color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default EmployeeCard