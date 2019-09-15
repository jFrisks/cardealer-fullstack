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

    //For edit in more-menu: <MenuItem onClick={() => props.onEdit(handleMenuClose)}>Edit</MenuItem>
    return (
        <Card>
            <CardHeader
                action={
                    <>
                        <IconButton aria-label="settings" onClick={handleMoreClick}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={props.onDelete}>Delete</MenuItem>
                        </Menu>
                    </>
                }
                title={props.data.brand}
                subheader={props.data.model}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    The XC60 has gone on to become Volvo's best-selling model, and the latest car will continue that trend. Like its big brother, the XC90, the XC60 takes a more comfort-oriented approach than its rivals, and that means it’s less dynamic than models like the Jaguar F-Pace and BMW X3.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Price: {props.data.price}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CarmodelCard;