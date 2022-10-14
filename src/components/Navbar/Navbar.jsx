import React, {useState, useEffect} from 'react';
import {Box, Button, Container, IconButton, Paper, Stack, Typography} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import '../../style/navbar.css';
import {Colors, Fonts} from "../../app/theme.mjs";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


const navItemStyle={
    fontFamily:Fonts.regular,
    color:"custom.passive",
    cursor:'pointer',
    "&:hover":{
        color: "custom.darkText"
    }
}

const Navbar = (props) => {
    const navigate=useNavigate();
    function changeRoute(path){
        navigate(path);
    }



    return (
            <Paper elevation={2}>
                <Container sx={{width:'100%'}} fixed>
                    <Stack
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        direction={'row'} spacing={4} sx={{width:'100%',paddingTop:'20px',paddingBottom:'20px'}}>
                        <img src={"/images/logo.svg"} alt={"logo"} id={"logo"}/>

                        <Stack
                            spacing={3}
                            alignItems={'center'} justifyContent={'flex-end'} direction={'row'}>

                            <Typography sx={navItemStyle}>
                                How it works?
                            </Typography>

                            <Typography sx={navItemStyle}>
                                Features
                            </Typography>

                            <Typography sx={navItemStyle}>
                                About Us
                            </Typography>

                            <IconButton color={'primary'} onClick={()=>props.setIsDark(!props.isDark)}>
                                {props.isDark?<LightModeIcon/>:<DarkModeIcon/>}
                            </IconButton>

                            <Button
                                onClick={()=>changeRoute("/sign-in")}
                                variant={'outlined'} sx={{borderRadius:'0'}}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Paper>
    )
}

export default Navbar;