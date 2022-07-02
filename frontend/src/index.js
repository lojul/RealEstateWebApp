// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./components/app";

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="/" />);
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import leaderReducer from './features/leader';
// import membersReducer from './features/members';

// const store = configureStore({
//     reducer: {
//         leader: leaderReducer,
//         members: membersReducer,
//     },
// })

// ReactDOM.render(
//     <Provider store={store}><App /></Provider>
//     , document.getElementById('root'));

// ReactDOM.render(
//     <App />
//     , document.getElementById('root'));


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

