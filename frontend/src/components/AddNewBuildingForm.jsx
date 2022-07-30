import * as React from 'react';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Axios from 'axios';
import {
    ref,
    uploadBytes,

} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { buildingSchema } from '../Validations/newBuildingValidation';

export default function AddNewBuildingForm() {
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
    const submit = async (e) => {

        e.preventDefault();
        let formData = {
            name: values.name,
            year: values.year,
            address: values.address,
            district: values.district,
            numOfTowers: values.numOfTowers,
            numOfUnits: values.numOfUnits,
            facilities: values.facilities,
            description: values.description,
            developer: values.developer,
            propertyManagement: values.propertyManagement,
        }
        const isValid = await buildingSchema.isValid(formData);
        // use FORMIK to display errors on input validations
        console.log(isValid)
        if (isValid === false) alert("Invalid inputs!")
        else {
            if (typeof parseInt(values.year) === 'number' && typeof parseInt(values.numOfTowers) === 'number' && typeof parseInt(values.numOfUnits) === 'number') {
                Axios.post(`${process.env.REACT_APP_SERVER}/building/add`, {

                    name: values.name,
                    year: values.year,
                    address: values.address,
                    district: values.district,
                    numOfTowers: values.numOfTowers,
                    numOfUnits: values.numOfUnits,
                    facilities: values.facilities,
                    description: values.description,
                    developer: values.developer,
                    propertyManagement: values.propertyManagement,

                }).then((response) => {

                    alert(response.data.message)
                }).catch((e) => {

                    alert(e.response.data.error);
                })
            } else {
                alert("Invalid input!")
            }

        }


    }
    const submitBuildingImages = () => {
        if (fileImages.length === 0) return;
        const filePath = `buildingImages/${fileImages[0].name + v4()}`
        const imageRef = ref(storage, filePath);
        uploadBytes(imageRef, fileImages[0]).then(() => {
            alert("Building images uploaded!")
        });

    }
    const submitFloorPlans = () => {
        if (fileFloorplan.length === 0) return;

        const filePath = `buildingFloorPlans/${fileFloorplan[0].name + v4()}`
        const imageRef = ref(storage, filePath);
        uploadBytes(imageRef, fileFloorplan[0]).then(() => {
            alert("Floor plans uploaded!")
        });
        return filePath;

    }
    const submitOtherFiles = () => {
        if (fileOther.length === 0) return;

        const filePath = `buildingOtherFiles/${fileOther[0].name + v4()}`
        const imageRef = ref(storage, filePath);
        uploadBytes(imageRef, fileOther[0]).then(() => {
            alert("Other files uploaded!")
        });
        return filePath;

    }
    const submitImages = () => {

        submitBuildingImages();
        submitFloorPlans();
        submitOtherFiles();
        // ISSUES TO RESOLVE
        // multiple file upload issue
        // make the connection with the added building and images
        // auto cropping

    }
    return (
        <Stack spacing={2} sx={{ marginTop: "25px" }}>
            <FormControl fullWidth >
                <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.name}
                    onChange={handleChange('name')}
                    placeholder=""
                    label="Name"
                />
            </FormControl>
            <FormControl fullWidth >
                <InputLabel htmlFor="outlined-adornment-amount">Year</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.year}
                    onChange={handleChange('year')}
                    placeholder=""
                    label="Year"
                />
            </FormControl>
            <FormControl fullWidth >
                <InputLabel htmlFor="outlined-adornment-amount">Address</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.address}
                    onChange={handleChange('address')}
                    placeholder=""
                    label="Address"
                />
            </FormControl>
            <FormControl fullWidth >
                <InputLabel htmlFor="outlined-adornment-amount">District</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.district}
                    onChange={handleChange('district')}
                    placeholder=""
                    label="District"
                />
            </FormControl>
            <FormControl fullWidth >
                <InputLabel htmlFor="outlined-adornment-amount">No of towers</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.numOfTowers}
                    onChange={handleChange('numOfTowers')}
                    placeholder=""
                    label="No of towers"
                />
            </FormControl>
            <FormControl fullWidth >
                <InputLabel htmlFor="outlined-adornment-amount">No of units</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.numOfUnits}
                    onChange={handleChange('numOfUnits')}
                    placeholder=""
                    label="No of units"
                />
            </FormControl>
            <FormControl fullWidth >
                <InputLabel htmlFor="outlined-adornment-amount">Facilities</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.facilities}
                    onChange={handleChange('facilities')}
                    placeholder="Comma seperated"

                    label="Facilities"
                />
            </FormControl>
            <FormControl fullWidth >
                <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.description}
                    onChange={handleChange('description')}
                    placeholder=""
                    label="Description"
                />
            </FormControl>
            <FormControl fullWidth >
                <InputLabel htmlFor="outlined-adornment-amount">Developer</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.developer}
                    onChange={handleChange('developer')}
                    placeholder=""
                    label="Developer"
                />
            </FormControl>
            <FormControl fullWidth >
                <InputLabel htmlFor="outlined-adornment-amount">Company</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.propertyManagement}
                    onChange={handleChange('propertyManagement')}
                    placeholder="Property management"
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
            <Button variant="contained" onClick={submitImages} type="submit">Upload images</Button>

        </Stack>
    );
}