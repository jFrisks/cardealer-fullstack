import React from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'

function EmployeeCard(props) {
    const {data, ...rest} = props;
    const {name} = props.data;
    return(
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                About
                </Typography>
                <Typography variant="body2" component="p">
                He is selling like a God when he is on vaccation, strangely enough.
                </Typography>
                {props.extra}
            </CardContent>
        </Card>
    )
}

export default EmployeeCard