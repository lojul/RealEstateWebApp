import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Axios from 'axios';


export default function AddForm() {
    const RenderAddForm = () => {
        const [values, setValues] = React.useState({
            name: '',
            year: '',
            address: '',
            numOfTowers: '',
            numOfUnits: '',
            facilities: '',
            description: '',
            developer: '',
            propertyManagement: '',
        });
        const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
        };
        const [fileImages, setFileImages] = React.useState([]);
        const [fileFloorplan, setFileFloorplan] = React.useState([]);
        const [fileOther, setFileOther] = React.useState([]);
        const selectFileImages = (e) => {
            setFileImages(e.target.files);

        }
        const selectFileFloorplan = (e) => {
            setFileFloorplan(e.target.files);

        }
        const selectFileOther = (e) => {
            setFileOther(e.target.files);

        }
        const submit = () => {

            if (typeof parseInt(values.year) === 'number' && typeof parseInt(values.numOfTowers) === 'number' && typeof parseInt(values.numOfUnits) === 'number') {
                // Axios.post(`${process.env.REACT_APP_SERVER}/building/add`, {
                Axios.post("http://localhost:3001/building/add", {
                    name: values.name,
                    year: values.year,
                    address: values.address,
                    district: values.district,
                    numOfTowers: values.numOfTowers,
                    numOfUnits: values.numOfUnits,
                    facilities: values.facilities,
                    description: values.description,
                    developer: values.developer,
                    projectManagement: values.projectManagement,
                }).then((response) => {

                    alert(response.data.message)
                }).catch((e) => {

                    alert(e.response.data.error);
                })
            } else {
                alert("Invalid input!")
            }

        }
        const submitImages = () => {
            const formData = new FormData();
            formData.append('images', fileImages);
            formData.append('floorPlan', fileFloorplan);
            formData.append('other', fileOther);

            // create put request and endpoint to upload the images
            // try to do both at once
        }
        return (
            <Stack spacing={2} sx={{ marginTop: "25px" }}>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.name}
                        onChange={handleChange('name')}
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="Name"
                    />
                </FormControl>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount">Year</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.year}
                        onChange={handleChange('year')}
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="Year"
                    />
                </FormControl>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount">Address</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.address}
                        onChange={handleChange('address')}
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="Address"
                    />
                </FormControl>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount">No of towers</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.numOfTowers}
                        onChange={handleChange('numOfTowers')}
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="No of towers"
                    />
                </FormControl>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount">No of units</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.numOfUnits}
                        onChange={handleChange('numOfUnits')}
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="No of units"
                    />
                </FormControl>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount">Facilities</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.facilities}
                        onChange={handleChange('facilities')}
                        startAdornment={<InputAdornment position="start">(Comma seperated)</InputAdornment>}
                        label="Facilities"
                    />
                </FormControl>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.description}
                        onChange={handleChange('description')}
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="Description"
                    />
                </FormControl>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount">Developer</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.developer}
                        onChange={handleChange('developer')}
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="Developer"
                    />
                </FormControl>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount">Company</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.propertyManagement}
                        onChange={handleChange('propertyManagement')}
                        startAdornment={<InputAdornment position="start">(Property management)</InputAdornment>}
                        label="Company"
                    />
                </FormControl>
                <Button variant="contained" onClick={submit}>Submit</Button>
                <>
                    <InputLabel id="demo-simple-select-label">Upload images of the property</InputLabel>
                    <input type="file" onChange={selectFileImages} multiple></input>
                </>
                <>
                    <InputLabel id="demo-simple-select-label">Upload the floor plan</InputLabel>
                    <input type="file" onChange={selectFileFloorplan} multiple></input>
                </>
                <>
                    <InputLabel id="demo-simple-select-label">Upload other files (if any)</InputLabel>
                    <input type="file" onChange={selectFileOther} multiple></input>
                </>
                <Button variant="contained" onClick={submitImages}>Upload images</Button>

            </Stack>
        );
    }


    const [isAdd, setIsAdd] = React.useState(true);

    return (
        <div>
            <div >
                <Button variant="contained" startIcon={<AddIcon />} size="large" sx={{ marginRight: "10px" }} onClick={() => {
                    setIsAdd(true)
                }}>
                    Add new building
                </Button>
                <Button variant="contained" endIcon={<SearchIcon />} size="large" onClick={() => {
                    setIsAdd(false)
                }}>
                    Search
                </Button>
            </div>
            <RenderAddForm />
        </div>
    );
}