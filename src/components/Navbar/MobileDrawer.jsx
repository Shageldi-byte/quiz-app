import React, {useState, useEffect} from 'react';
import {Box, Drawer, IconButton, Stack, Typography} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {navItemStyle} from "./Navbar";

const MobileDrawer = (props) => {
    function onClose(){
        props.setDrawerOpen(false);
    }
    return (
        <Drawer
            open={props.drawerOpen}
            onClose={onClose}
            anchor={'right'}>

            <Box sx={{backgroundColor:'custom.background',width:200,p:5,height:'100vh'}}>
                <Stack spacing={5} sx={{width:'100%'}} alignItems={'flex-end'}>
                    <Typography sx={{...navItemStyle,fontSize:'22px'}}>
                        How it works?
                    </Typography>

                    <Typography sx={{...navItemStyle,fontSize:'22px'}}>
                        Features
                    </Typography>

                    <Typography sx={{...navItemStyle,fontSize:'22px'}}>
                        About Us
                    </Typography>

                    <IconButton sx={{position:'fixed',bottom:0}} color={'primary'} onClick={()=>props.setIsDark(!props.isDark)}>
                        {props.isDark?<LightModeIcon/>:<DarkModeIcon/>}
                    </IconButton>
                </Stack>
            </Box>

        </Drawer>
    )
}

export default MobileDrawer;