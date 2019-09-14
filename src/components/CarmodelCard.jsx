import React from 'react'
import { Card, CardHeader, CardContent, IconButton, Typography, Menu, MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';

function CarmodelCard(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleMoreClick(event) {
        setAnchorEl(event.currentTarget);
    }
    function handleMenuClose() {
        setAnchorEl(null);
    }

    return (
        <Card>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon onClick={handleMoreClick}/>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                        </Menu>
                    </IconButton>
                }
                title="Volvo"
                subheader="XC60"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    The XC60 has gone on to become Volvo's best-selling model, and the latest car will continue that trend. Like its big brother, the XC90, the XC60 takes a more comfort-oriented approach than its rivals, and that means it’s less dynamic than models like the Jaguar F-Pace and BMW X3.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CarmodelCard;