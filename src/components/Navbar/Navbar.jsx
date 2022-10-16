import React, {useState, useEffect, useContext} from 'react';
import {Box, Button, Container, IconButton, Paper, Stack, Typography} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import '../../style/navbar.css';
import {Colors, Fonts} from "../../app/theme.mjs";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {AppContext} from "../../App";
import MenuIcon from '@mui/icons-material/Menu';
import MobileDrawer from "./MobileDrawer";


export const navItemStyle={
    fontFamily:Fonts.regular,
    color:"custom.passive",
    cursor:'pointer',
    "&:hover":{
        color: "custom.darkText"
    }
}

const Navbar = (props) => {
    const navigate=useNavigate();
    const {isMobile}=useContext(AppContext);
    function changeRoute(path){
        navigate(path);
    }

    const [drawerOpen,setDrawerOpen]=useState(false);




    return (
            <Box sx={{position:'fixed',width:'100%',top:0,zIndex:9}} className={'navbar-con'}>
                <Container sx={{width:'100%'}} fixed>
                    <Stack
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        direction={'row'} spacing={4} sx={{width:'100%',paddingTop:'20px',paddingBottom:'20px'}}>
                        <img src={"/images/logo.svg"} alt={"logo"} id={"logo"}/>

                        {
                            isMobile?
                                <Stack
                                    spacing={3}
                                    alignItems={'center'} justifyContent={'flex-end'} direction={'row'}>
                                    <Button
                                        onClick={()=>changeRoute("/sign-in")}
                                        variant={'outlined'} sx={{borderRadius:'0'}}>
                                        Sign in
                                    </Button>
                                    <IconButton onClick={()=>setDrawerOpen(true)} color={'primary'}>
                                        <MenuIcon/>
                                    </IconButton>
                                    <MobileDrawer isDark={props.isDark} setIsDark={props.setIsDark} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
                                </Stack>
                                :
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
                        }
                    </Stack>
                </Container>
            </Box>
    )
}

export default Navbar;