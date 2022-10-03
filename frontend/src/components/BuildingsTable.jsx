import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Axios from 'axios';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function TableExample(props) {

    const [term, setTerm] = React.useState('');
    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    const [buildings, setBuildings] = React.useState([]);
    React.useEffect(() => {
        Axios.get(`${process.env.REACT_APP_SERVER}/building/getAll`)
            .then((response) => {

                setBuildings(response.data);

            }).catch((e) => {
                alert(e.response.data.error);

            })
    }, []);

    const search = () => {

        if (term !== '') {
            Axios.get(`${process.env.REACT_APP_SERVER}/building/search?term=${term}`)
                .then((response) => {

                    setBuildings(response.data);
                    if (buildings.length === 0) alert("No search results found!");

                }).catch((e) => {
                    alert(e.response.data.error);

                })
        }

    }
    return (
        <div>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, marginBottom: '15px' }}
            >

                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Buildings"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    value={term}
                    onChange={handleChange}
                />
                <IconButton sx={{ p: '10px' }} aria-label="search" onClick={search}>
                    <SearchIcon />
                </IconButton>

            </Paper>

            <Table style={{ border: "1px solid black" }}>
                <Thead>
                    <Tr>
                        <Th style={{ border: "1px solid black", backgroundColor: "#F0FFFF" }}>Name</Th>
                        <Th style={{ border: "1px solid black", backgroundColor: "#F0FFFF" }}>Year</Th>
                        <Th style={{ border: "1px solid black", backgroundColor: "#F0FFFF" }}>Address</Th>
                        <Th style={{ border: "1px solid black", backgroundColor: "#F0FFFF" }}>District</Th>
                    </Tr>
                </Thead>
                <Tbody >
                    {buildings.map((row) => (

                        < Tr
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <Td style={{ border: "1px solid black", padding: "2px" }} > <a href={`../buildingDetails/${row.id}`} style={{ color: "inherit", textDecoration: "none" }}>{row.name}</a></Td>
                            <Td style={{ border: "1px solid black" }}>{row.year}</Td>
                            <Td style={{ border: "1px solid black" }}>{row.address}</Td>
                            <Td style={{ border: "1px solid black" }}>{row.district}</Td>

                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div >
    );
}