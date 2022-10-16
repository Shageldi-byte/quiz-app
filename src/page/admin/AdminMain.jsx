import React, {useState, useEffect} from 'react';
import {Button, Container} from "@mui/material";
import {Outlet} from 'react-router-dom';

const AdminMain = (props) => {
    return (
        <Container fixed>
            <Button>Hey I am from AdminMain.jsx</Button>

            <Outlet/>
        </Container>
    )
}

export default AdminMain;