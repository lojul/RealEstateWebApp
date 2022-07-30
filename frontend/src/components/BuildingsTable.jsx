import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Axios from 'axios';

export default function TableExample(props) {

    const [buildings, setBuildings] = React.useState([]);
    React.useEffect(() => {
        Axios.get(`${process.env.REACT_APP_SERVER}/building/getAll`)
            .then((response) => {

                setBuildings(response.data);

            }).catch((e) => {
                alert(e.response.data.error);
                // if (e.response.data.auth === false) {
                //     alert("Please sign in again!");
                //     navigate('/Signin');
                // }
            })
    }, []);
    return (
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
                    <Tr
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <Td style={{ border: "1px solid black" }}>{row.name}</Td>
                        <Td style={{ border: "1px solid black" }}>{row.year}</Td>
                        <Td style={{ border: "1px solid black" }}>{row.address}</Td>
                        <Td style={{ border: "1px solid black" }}>{row.district}</Td>

                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}