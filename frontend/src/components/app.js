import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgentHome from '../pages/AgentHome';
import CustomerHome from '../pages/CustomerHome';

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
                <Route path="/" element={<AgentHome />} />
                <Route path="/Customer" element={<CustomerHome />} />

                {/* <Route path="/MemberClientRequest/:clientId" element={<MemberClientRequest />} /> */}


                <Route path="*" element={<AgentHome />} />
            </Routes>
        </Router>
        // </AuthContext.Provider>
    )
}

export default app;