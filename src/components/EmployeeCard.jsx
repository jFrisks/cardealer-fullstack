import React from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'

function EmployeeCard() {
    return(
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Jonathan Frisk
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                About
                </Typography>
                <Typography variant="body2" component="p">
                He is selling like a God when he is on vaccation, strangely enough.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default EmployeeCard