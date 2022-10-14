import React, {useState, useEffect} from 'react';
import {Box, Container, Paper} from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {Outlet, useLocation} from 'react-router-dom';

const Index = (props) => {
    const location=useLocation();

    return (
        <Paper elevation={0} sx={{borderRadius:0}}>
            <Navbar isDark={props.isDark} setIsDark={props.setIsDark}/>
            {
                location.pathname==='/quiz'?
                    <div>

                        <Outlet/>

                    </div>
                    :
                    <Container fixed>

                        <Outlet/>

                    </Container>

            }

            <Footer/>
        </Paper>
    )
}

export default Index;