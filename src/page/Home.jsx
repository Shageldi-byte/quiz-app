import React, {useState, useEffect, useContext} from 'react';
import {Box, Button, CircularProgress, Grid, Paper, Skeleton, Stack, Typography} from "@mui/material";
import {boldFont, Colors, containedButton, Fonts, textButton} from "../app/theme.mjs";
import {TypeAnimation} from "react-type-animation";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CategoryModal from "../components/Home/CategoryModal";
import Test from "./Test";
import Image from "mui-image";
import CategoryCard from "../components/Home/CategoryCard";
import {AppContext} from "../App";


const Home = (props) => {
    const {isMobile} = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10000);
    }, []);


    const categories = [
        "Computer",
        "Math",
        "Music",
        "Biology",
        "Cyber security",
        "AI",
        "Machine learning",
        "Physics",
        "Information Technology",
        "Database",
        "Front end development",
        "UI/UX",
        "Backend"
    ];


    let list = categories.map(item => {
        return {
            title: item,
            image: `https://picsum.photos/id/${(parseInt(Math.random() * 100))}/200/300`
        }
    })

    return (
        <Paper elevation={0}>
            <Grid container sx={{mt: 4, mb: 6}} spacing={4} alignItems={'center'}>
                <Grid item sm={12} md={6}>
                    <Stack direction={'column'} spacing={3}>

                        {
                            isLoading ?
                                <Skeleton sx={{width: '100%', height: 100}}/>
                                :
                                <Typography sx={{...boldFont, fontSize: '34px'}}>
                                    Learn
                                    new concepts
                                    for each question
                                </Typography>
                        }

                        {
                            isLoading ?
                                <Skeleton/>
                                :
                                <div style={{fontSize: '12px', color: Colors.hintColor}}>
                                    <TypeAnimation
                                        sequence={['Type faster or slower by setting speed.', 1000, '']}
                                        speed={75} // Must be in range between 1 and 99!
                                        repeat={Infinity}
                                    />
                                </div>
                        }

                        {
                            isLoading ?
                                <Stack direction={'row'} spacing={3}>
                                    <Skeleton sx={{width: 100, height: 70}}/>
                                    <Skeleton sx={{width: 100, height: 70}}/>
                                </Stack>
                                :
                                <Stack direction={'row'} spacing={3}>
                                    <Button variant={'contained'}
                                            sx={{...containedButton}}
                                            onClick={() => setOpen(!open)}
                                    >
                                        Start solving
                                    </Button>

                                    <CategoryModal open={{open: open, setOpen: setOpen}}/>

                                    <Button sx={{...textButton}} startIcon={<ArrowDropDownIcon/>}>
                                        Know more
                                    </Button>
                                </Stack>
                        }
                    </Stack>
                </Grid>
                <Grid item sm={12} md={6}>
                    {
                        isMobile ?
                            null
                            :

                            isLoading ?
                                <Skeleton variant={'rounded'} sx={{width: '80%', height: 300}}/>
                                :
                                <Image src={"/images/illustartion.svg"} style={{width: '80%'}}
                                       showLoading={
                                           <CircularProgress/>
                                       }/>


                    }
                </Grid>
            </Grid>


            <Box sx={{mt: 10, mb: 10}}>
                <Typography sx={{fontFamily: Fonts.bold, fontSize: '24px', width: '100%', textAlign: 'center'}}>
                    Categories
                </Typography>

                <Grid container spacing={2} mt={3}>
                    {
                        list.map((item, i) => {
                            return (
                                <Grid key={`cat-${i}`} item xs={6} sm={6} md={4}>
                                    <CategoryCard item={item} isLoading={isLoading}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>

        </Paper>
    )
}

export default Home;