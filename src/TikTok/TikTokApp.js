import React, {createContext, useTransition} from 'react';
import {Box, Button, Container, createTheme, Paper, ThemeProvider} from "@mui/material";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InboxIcon from '@mui/icons-material/Inbox';
import PersonIcon from '@mui/icons-material/Person';
import {useTranslation} from "react-i18next";
import TikTokHome from "./TikTokHome";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TikTokIndex from "./TikTokIndex";
import TikTokSearch from "./TikTokSearch";

const dark=createTheme({
    palette:{
        mode:'dark',
        primary:{
            main:"#ffffff",
            light:'#ffffff',
            lighter:'#ffffff',
            dark:"#cccccc",
            darker:"#cccccc"
        }
    }
})
export const AppContext=createContext();
function TikTokApp() {

    const {t,i18n}=useTranslation();
    function changeLanguage(lng){
        i18n.changeLanguage(lng);
    }
    return (
        <AppContext.Provider value={{
            t:t,
            changeLanguage:changeLanguage
        }}>
            <ThemeProvider theme={dark}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<TikTokIndex/>}>
                            <Route index element={<TikTokHome/>}/>
                            <Route path={'/search'} element={<TikTokSearch/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </AppContext.Provider>
    )
}

export default TikTokApp;