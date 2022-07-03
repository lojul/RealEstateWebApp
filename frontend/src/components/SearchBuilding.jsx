import * as React from 'react';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

export default function SearchBuilding() {
    const [values, setValues] = React.useState({
        name: '',
        year: '',
        address: '',
        district: '',
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

    const [searchBy, setSearchBy] = React.useState("");
    const handleChangeSelect = (event) => {
        setSearchBy(event.target.value)
    }
    const [searchByValue, setSearchByValue] = React.useState("");
    const handleChangeSearch = (event) => {
        setSearchByValue(event.target.value)
    }

    const search = () => {
        const displaySearchResults = (result) => {
            setValues({ // gave some error in frontend but worked
                ['name']: result.name,
                ['year']: result.year,
                ['address']: result.address,
                ['district']: result.district,
                ['numOfTwers']: result.numOfTwers,
                ['numOfUnits']: result.numOfUnits,
                ['facilities']: result.facilities,
                ['description']: result.description,
                ['developer']: result.developer,
                ['propertyManagement']: result.propertyManagement,
            });


        }
        Axios.get(`${process.env.REACT_APP_SERVER}/building/search?searchBy=${searchBy}&searchByValue=${searchByValue}`, {

        }).then((response) => {

            displaySearchResults(response.data[0])
        }).catch((e) => {

            alert(e.response.data.error);
        })
    }

    const deleteProperty = () => {
        // complete axios call to delete
        alert('Property deleted! (not yet implemented)')
    }

    const saveChanges = () => {
        // complete axios call to delete
        alert('Changes saved! (not yet implemented)')
    }
    return (
        <Stack spacing={2} sx={{ marginTop: "25px" }}>
            <Stack direction="row" spacing={2}>
                <FormControl>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={searchBy}
                        label="Select"
                        onChange={handleChangeSelect}
                    >
                        <MenuItem value={"id"}>By id</MenuItem>
                        <MenuItem value={"name"}>By name</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="outlined-adornment-amount">Input search term</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={searchByValue}
                        onChange={handleChangeSearch}
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="Search by value"
                    />
                </FormControl>
                <IconButton color="primary" aria-label="search" onClick={search}>
                    <SearchIcon />
                </IconButton>
            </Stack>

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
                <InputLabel htmlFor="outlined-adornment-amount">District</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.district}
                    onChange={handleChange('district')}
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    label="District"
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
            <Button variant="contained" onClick={deleteProperty}>Delete property</Button>

            <Button variant="contained" onClick={saveChanges}>Save changes</Button>
        </Stack>
    );
}