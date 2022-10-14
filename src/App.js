import "./App.css";
import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./page/Index";
import Home from "./page/Home";
import Quiz from "./page/Quiz";
import SignIn from "./page/SignIn";
import {createTheme, ThemeProvider} from "@mui/material";
import {Colors, Fonts} from "./app/theme.mjs";
import Test from "./page/Test";


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
        custom:{
            darkText:"#333333",
            hintColor:"#828282",
            passive:"#E0E0E0",
            disabled:"#D1D1D1",
            disabledText:"rgba(51, 51, 51, 0.5)",
            white:"#FFFFFF",
            stroke:"#C1BBBB"
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
            stroke:"#C1BBBB"
        }
    }
})

function App() {
    const [isDark,setIsDark]=useState(false);
    return (
        <ThemeProvider theme={isDark?darkTheme:lightTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Index isDark={isDark} setIsDark={setIsDark}/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"/quiz"} element={<Quiz/>}/>
                    </Route>
                    <Route path={'/sign-in'} element={<SignIn/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
