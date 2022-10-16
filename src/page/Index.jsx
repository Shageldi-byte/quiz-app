import React, {useState, useEffect} from 'react';
import {Box, Container, LinearProgress, Paper} from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {Outlet, useLocation} from 'react-router-dom';

const Index = (props) => {


    const location=useLocation();

    useEffect(()=>{
        props.setLoading(true);
    },[location]);



    return (

        <Paper elevation={0} sx={{borderRadius:0}}>

            <Navbar isDark={props.isDark} setIsDark={props.setIsDark}/>
            {
                location.pathname==='/quiz'?
                    <div style={{paddingTop:'50px'}}>

                        <Outlet/>

                    </div>
                    :
                    <Container fixed sx={{paddingTop:'50px'}}>

                        <Outlet/>

                    </Container>

            }

            <Footer/>
        </Paper>
    )
}

export default Index;