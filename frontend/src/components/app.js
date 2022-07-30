import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerHome from '../pages/CustomerHome';
import AddNewBuildingPage from '../pages/AddNewBuildingPage';
import SearchBuildingPage from '../pages/SearchBuildingPage';

// import { AuthContext } from '../Helpers/AuthContext';
// import { useState, useEffect } from 'react';
// import Axios from 'axios';

function app() {

    // const [authState, setAuthState] = useState(false);

    // useEffect(() => {
    //     // "http://localhost:3001/Auth"
    //     // `${process.env.REACT_APP_SERVER}/Auth`
    //     Axios.get(`${process.env.REACT_APP_SERVER}/Auth`, {
    //         headers: {
    //             "x-access-token": localStorage.getItem("token")
    //         }
    //     })
    //         .then((response) => {

    //             setAuthState(true);

    //         }).catch((e) => {
    //             setAuthState(false);
    //         })

    // }, [])
    return (
        // <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
            <Routes>
                <Route path="/" element={<CustomerHome />} />
                <Route path="/AddNewBuilding" element={<AddNewBuildingPage />} />
                <Route path="/SearchBuilding" element={<SearchBuildingPage />} />

                {/* <Route path="/MemberClientRequest/:clientId" element={<MemberClientRequest />} /> */}


                <Route path="*" element={<CustomerHome />} />
            </Routes>
        </Router>
        // </AuthContext.Provider>
    )
}

export default app;