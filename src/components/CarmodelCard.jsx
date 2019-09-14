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
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CarmodelCard;