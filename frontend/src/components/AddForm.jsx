import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import AddNewBuildingForm from './AddNewBuildingForm';
import SearchBuilding from './SearchBuilding';

export default function AddForm() {

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
            {isAdd ? <AddNewBuildingForm /> : <SearchBuilding />}

        </div>
    );
}