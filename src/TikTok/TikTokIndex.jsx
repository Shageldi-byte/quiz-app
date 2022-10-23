import React, {useState, useEffect, useContext} from 'react';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InboxIcon from "@mui/icons-material/Inbox";
import PersonIcon from "@mui/icons-material/Person";
import {Box, Paper} from "@mui/material";
import {AppContext} from "./TikTokApp";
import {Outlet, useNavigate} from 'react-router-dom';

const TikTokIndex = (props) => {
    const [value, setValue] = React.useState(0);
    const {t}=useContext(AppContext);
    const navigate=useNavigate();
    function changeRoute(path){
        navigate(path);
    }
    return (
        <div>
            <Paper sx={{
                height:'100vh',
                borderRadius:0
            }}>

                <Box sx={{height:'90vh'}}>
                    <Outlet/>
                </Box>

                <BottomNavigation
                    showLabels
                    value={value}
                    sx={{
                        backgroundColor:'#000000',
                        color:'white',
                        position:'fixed',
                        bottom:0,
                        width:'100%'
                    }}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction onClick={()=>changeRoute('/')} label={t('home')} icon={<HomeIcon/>} />
                    <BottomNavigationAction onClick={()=>changeRoute('/search')} label={t('search')} icon={<SearchIcon />} />
                    <BottomNavigationAction label="" icon={<AddBoxIcon />} />
                    <BottomNavigationAction label={t('inbox')} icon={<InboxIcon />} />
                    <BottomNavigationAction label={t('profile')} icon={<PersonIcon />} />
                </BottomNavigation>




            </Paper>

        </div>
    )
}

export default TikTokIndex;