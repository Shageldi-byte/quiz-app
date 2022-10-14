import React, {useState, useEffect} from 'react';
import {Box, Button, Grid, Paper, Stack, Typography} from "@mui/material";
import {boldFont, Colors, containedButton, textButton} from "../app/theme.mjs";
import {TypeAnimation} from "react-type-animation";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CategoryModal from "../components/Home/CategoryModal";
import Test from "./Test";




const Home = (props) => {
    const [open,setOpen]=useState(false);

    return (
        <Paper elevation={0}>
            <Grid container sx={{mt:4,mb:6}} alignItems={'center'}>
                <Grid item sm={12} md={6}>
                   <Stack direction={'column'} spacing={3}>
                       <Test name={"Shageldi"} surname={"Alyyew"}/>
                       <Typography sx={{...boldFont,fontSize:'34px'}}>
                           Learn
                           new concepts
                           for each question
                       </Typography>

                       <div style={{fontSize:'12px',color:Colors.hintColor}}>
                           <TypeAnimation
                               sequence={['Type faster or slower by setting speed.', 1000, '']}
                               speed={75} // Must be in range between 1 and 99!
                               repeat={Infinity}
                           />
                       </div>

                      <Stack direction={'row'} spacing={3}>
                          <Button variant={'contained'}
                            sx={{...containedButton}}
                                  onClick={()=>setOpen(!open)}
                          >
                              Start solving
                          </Button>

                          <CategoryModal open={{open:open,setOpen:setOpen}}/>

                          <Button sx={{...textButton}} startIcon={<ArrowDropDownIcon/>}>
                              Know more
                          </Button>
                      </Stack>
                   </Stack>
                </Grid>
                <Grid item sm={12} md={6}>
                    <img
                        style={{width:"80%"}}
                        src={"/images/illustartion.svg"} alt={"illustration"}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Home;