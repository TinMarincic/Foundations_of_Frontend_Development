import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useTheme } from '@mui/material';
import './about_us.css';

function About_us() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="container">
            <div className="image-container">
                <img src="/images/anonymus.png" alt="Anonymus" />
            </div>

            <div className="content">
                <p>
                    "I have always had a passion to be the owner of a beauty salon, which
                    will provide a wide range of services and cosmetics for all ages.
                    With the current team, made up of more than ten professionals,
                    Bella will continue to grow and expand, both in terms
                    of staff and the tendency to become a franchise, a salon that will be
                    recognizable across Europe. I am very proud of everything we have
                    achieved so far. By creating jobs and seizing the opportunity for
                    improvement, we contribute to the community. Our database of satisfied
                    clients crosses the borders of Bosnia and Herzegovina. Together with
                    the "Bella" team, I invite you to visit our salon and go through a
                    unique experience...“
                </p>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: theme.palette.primary.dark, '&:hover': { backgroundColor: theme.palette.primary.main } }}
                    onClick={handleClickOpen}
                >
                    View More
                </Button>
            </div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
                <DialogTitle id="dialog-title">More About Us</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        WE HAVE RYAN REYNOLDS!!!!!!  WE HAVE RYAN REYNOLDS!!! WE HAVE RYAN REYNOLDS!!!!!! WE HAVE RYAN REYNOLDS!!!!!! HE IS HELD HOSTAGE
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ color: theme.palette.primary.dark }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default About_us;
