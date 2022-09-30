import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function BuildingDetails(props) {
    const navigate = useNavigate();

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
        Axios.delete(`${process.env.REACT_APP_SERVER}/building/delete?id=${buildingId}`)
            .then((response) => {

                alert(response.data)
                navigate("../") // navigate to root
            }).catch((e) => {
                alert(e.response.data.error);

            })
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
                                    {building.name ? <Typography>{building.name}</Typography> : null}
                                    <Typography><b>Year</b></Typography>
                                    {building.year ? <Typography>{building.year}</Typography> : null}
                                    <Typography><b>District</b></Typography>
                                    {building.district ? <Typography>{building.district}</Typography> : null}
                                    <Typography><b>Number of Towers</b></Typography>
                                    {building.numOfTowers ? <Typography>{building.numOfTowers}</Typography> : null}
                                    <Typography><b>Number of Units</b></Typography>
                                    {building.numOfUnits ? <Typography>{building.numOfUnits}</Typography> : null}
                                    <Typography><b>Coordinates</b></Typography>
                                    {building.coordinates ? <Typography>{building.coordinates.x}, {building.coordinates.y}</Typography> : null}
                                    <Typography><b>Developer</b></Typography>
                                    {building.developer ? <Typography>{building.developer}</Typography> : null}
                                    <Typography><b>Company</b></Typography>
                                    {building.propertyManagement ? <Typography>{building.propertyManagement}</Typography> : null}
                                </Stack>
                            </Box></Grid>
                            <Grid item xs={12} md={6}><Box sx={{ bgcolor: '#FAF9F6', height: '100vh' }} >
                                <Stack spacing={2}>
                                    <Typography><b>Description</b></Typography>
                                    {building.description ? <Typography>{building.description}</Typography> : null}
                                    <Typography><b>Address</b></Typography>
                                    {building.address ? <Typography>{building.address}</Typography> : null}
                                    <Typography><b>Facilities</b></Typography>
                                    {building.facilities ?
                                        building.facilities.map((facility) => {
                                            return (

                                                <Typography key={Math.random()}>{facility}</Typography>
                                            )
                                        }) : null}
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