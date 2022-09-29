import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function BuildingDetails(props) {

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="lg">

                <Grid container spacing={3}>
                    <Grid item xs={12}><Box sx={{ bgcolor: '#cfe8fd', height: '50vh' }} /></Grid>
                    <Grid item xs={12} md={6}><Box sx={{ bgcolor: '#FAF9F6', height: '100vh' }} >
                        <Stack spacing={2}>
                            <Typography><b>Name</b></Typography>
                            <Typography><b>Year</b></Typography>
                            <Typography><b>Address</b></Typography>
                            <Typography><b>District</b></Typography>
                            <Typography><b>Number of Towers</b></Typography>
                            <Typography><b>Number of Units</b></Typography>
                            <Typography><b>Coordinates</b></Typography>
                            <Typography><b>Developer</b></Typography>
                            <Typography><b>Company</b></Typography>
                        </Stack>
                    </Box></Grid>
                    <Grid item xs={12} md={6}><Box sx={{ bgcolor: '#FAF9F6', height: '50vh' }} >
                        <Stack spacing={2}>
                            <Typography><b>Description</b></Typography>
                            <Typography><b>Facilities</b></Typography>
                        </Stack>
                    </Box></Grid>
                </Grid>
            </Container>
        </div>
    );
}