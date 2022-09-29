import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Axios from 'axios';
import Button from '@mui/material/Button';

export default function BuildingDetails(props) {

    const [buildingDetails, setBuildingDetails] = React.useState([]);
    const buildingId = props.id;
    React.useEffect(() => {
        Axios.get(`${process.env.REACT_APP_SERVER}/building/searchById?id=${buildingId}`)
            .then((response) => {

                setBuildingDetails(response.data);

            }).catch((e) => {
                alert(e.response.data.error);

            })
    }, [buildingId]);

    const deleteBuilding = () => {
        alert("You are about to delete a building!")
    }

    const editBuilding = () => {
        alert("You are about to edit a building!")
    }

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="lg">
                {buildingDetails.map((building) => {
                    return (
                        <Grid container spacing={3} key={building.id}>

                            <Grid item xs={12}><Box sx={{ bgcolor: '#cfe8fd', height: '50vh' }} /></Grid>
                            <Grid item xs={12} md={6}><Box sx={{ bgcolor: '#FAF9F6', height: '100vh' }} >
                                <Stack spacing={2}>
                                    <Typography><b>Name</b></Typography>
                                    <Typography>{building.name}</Typography>
                                    <Typography><b>Year</b></Typography>
                                    <Typography>{building.year}</Typography>
                                    <Typography><b>Address</b></Typography>
                                    <Typography>{building.address}</Typography>
                                    <Typography><b>District</b></Typography>
                                    <Typography>{building.district}</Typography>
                                    <Typography><b>Number of Towers</b></Typography>
                                    <Typography>{building.numOfTowers}</Typography>
                                    <Typography><b>Number of Units</b></Typography>
                                    <Typography>{building.numOfUnits}</Typography>
                                    <Typography><b>Coordinates</b></Typography>
                                    <Typography>{building.coordinates.x}, {building.coordinates.y}</Typography>
                                    <Typography><b>Developer</b></Typography>
                                    <Typography>{building.developer}</Typography>
                                    <Typography><b>Company</b></Typography>
                                    <Typography>{building.propertyManagement}</Typography>
                                </Stack>
                            </Box></Grid>
                            <Grid item xs={12} md={6}><Box sx={{ bgcolor: '#FAF9F6', height: '100vh' }} >
                                <Stack spacing={2}>
                                    <Typography><b>Description</b></Typography>
                                    <Typography>{building.description}</Typography>
                                    <Typography><b>Facilities</b></Typography>
                                    {building.facilities.map((facility) => {
                                        return (

                                            <Typography key={Math.random()}>{facility}</Typography>
                                        )
                                    })}
                                    <Stack direction="row" spacing={2}>
                                        <Button variant="contained" onClick={deleteBuilding}>Delete</Button>
                                        <Button variant="contained" onClick={editBuilding}>Edit</Button>
                                    </Stack>
                                </Stack>
                            </Box></Grid>
                        </Grid>
                    )

                })}


            </Container>
        </div>
    );
}