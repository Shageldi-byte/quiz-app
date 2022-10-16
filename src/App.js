import "./App.css";
import React, {createContext, useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Index from "./page/Index";
import Home from "./page/Home";
import Quiz from "./page/Quiz";
import SignIn from "./page/SignIn";
import {Box, createTheme, LinearProgress, ThemeProvider} from "@mui/material";
import {Colors, Fonts} from "./app/theme.mjs";
import Test from "./page/Test";
import AdminMain from "./page/admin/AdminMain";
import First from "./page/admin/First";
import Second from "./page/admin/Second";
import {useWidth} from "./components/AppCommon";
import {phoneSizes} from "./app/constant.mjs";


const lightTheme=createTheme({
    components:{
      MuiTypography:{
          defaultProps:{
              fontFamily:Fonts.regular,
              color:'custom.darkText'
          }
      }
    },
    palette:{
        mode:"light",
        primary:{
           main:Colors.primary,
            light:Colors.primaryLight,
            lighter:Colors.primaryLight,
            dark:Colors.primaryDark,
            darker:Colors.primaryDark
        },
        passiveButton:{
            main:"#D1D1D1",
            light:"#D1D1D1",
            lighter:"#D1D1D1",
            dark:"#a0a0a0",
            darker:"#a0a0a0"
        },
        custom:{
            darkText:"#333333",
            hintColor:"#828282",
            passive:"#E0E0E0",
            disabled:"#D1D1D1",
            disabledText:"rgba(51, 51, 51, 0.5)",
            white:"#FFFFFF",
            stroke:"#C1BBBB",
            background:"#FFFFFF"
        }
    }
})

const darkTheme=createTheme({
    components:{
        MuiTypography:{
            defaultProps:{
                fontFamily:Fonts.regular,
                color:'custom.darkText'
            }
        }
    },
    palette:{
        mode:"dark",
        primary:{
            main:Colors.primary,
            light:Colors.primaryLight,
            lighter:Colors.primaryLight,
            dark:Colors.primaryDark,
            darker:Colors.primaryDark
        },
        custom:{
            darkText:"#d5d5d5",
            hintColor:"#828282",
            passive:"#E0E0E0",
            disabled:"#D1D1D1",
            disabledText:"rgba(51, 51, 51, 0.5)",
            white:"#FFFFFF",
            stroke:"#C1BBBB",
            background:"#1a1a1a"
        }
    }
})


export const AppContext = createContext();

function App() {
    const width=useWidth();
    function checker(){
        return phoneSizes.includes(width);
    }
    const [isMobile,setIsMobile]=useState(checker());
    useEffect(()=>{
        setIsMobile(checker());
    },[width]);

    const [isDark,setIsDark]=useState(false);
    const [isLoading,setLoading]=useState(true);
    window.addEventListener('load',()=>{
        setLoading(false);
    })

    return (
        <AppContext.Provider value={
            {
                isMobile:isMobile,
                isLoading:isLoading,
                setLoading:setLoading
            }
        }>
            <ThemeProvider theme={isDark?darkTheme:lightTheme}>
                {
                    isLoading?
                        <Box sx={{width:'100%',zIndex:10,position:'absolute'}}>
                            <LinearProgress/>
                        </Box>
                        :
                        null
                }
                <BrowserRouter>
                    <Routes>


                        <Route path={'/'} element={<Index setLoading={setLoading} isDark={isDark} setIsDark={setIsDark}/>}>
                            <Route index element={<Home/>}/> {/* When path name is equal / Outlet will be Home.jsx*/}
                            <Route path={"/quiz"} element={<Quiz/>}/> {/* When path name is equal /quiz Outlet will be Quiz.jsx*/}
                            <Route path={"/test"} element={<Test/>}/> {/* When path name is equal /test Outlet will be Test.jsx*/}
                        </Route>

                        <Route path={'/admin'} element={<AdminMain/>}>
                            <Route index element={<First/>}/>
                            <Route path={'dashboard'} element={<Second/>}/>
                        </Route>



                        <Route path={'/sign-in'} element={<SignIn/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
