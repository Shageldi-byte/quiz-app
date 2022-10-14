import React, {useState, useEffect} from 'react';
import {Box, Card, CardActionArea, Container, Stack, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {Colors, Fonts} from "../app/theme.mjs";

const steps=[
    1,2,3,4,5
];

const activeStyle={
    background:Colors.primary,
    borderRadius:0,
    color:"white"
}

const passiveStyle={
    background:"#D1D1D1",
    borderRadius:0,
    color:"black"
}

const Quiz = (props) => {
    const [selected,setSelected]=useState("a");

    function getStyle(variant){
        if(variant===selected){
            return activeStyle;
        }
        return passiveStyle;
    }


    return (
        <div>
            <Stack spacing={5} mt={5}>
                <Stepper activeStep={2} alternativeLabel>
                    {
                        steps.map((item,i)=>{
                            return(
                                <Step key={`step-${i}`}>
                                    <StepLabel></StepLabel>
                                </Step>
                            )
                        })
                    }
                </Stepper>

                <Box sx={{backgroundColor:Colors.primary,
                    width:'100%',paddingTop:'40px',paddingBottom:'40px'}}>

                    <center>
                        <Typography
                            sx={{color:'#FFFFFF',
                                fontSize:'24px',
                                textAlign:'center',
                                width:"90%",
                                fontFamily:Fonts.regular}}
                        >
                            An interface design application that runs in the browser with team-based collaborative design projects
                        </Typography>
                    </center>

                </Box>


                <Box sx={{width:'100%'}}>
                        <Stack sx={{width:'100%'}} justifyContent={'center'} direction={'row'} mt={4} mb={4} spacing={4}>
                            <Card
                                onClick={()=>setSelected("a")}
                                sx={{...getStyle("a")}}>
                                <CardActionArea>
                                    <Typography>A</Typography>

                                    <Typography sx={{p:2}}>FIGMA</Typography>
                                </CardActionArea>
                            </Card>

                            <Card
                                onClick={()=>setSelected("b")}
                                sx={{...getStyle("b")}}>
                                <CardActionArea>
                                    <Typography>B</Typography>

                                    <Typography sx={{p:2}}>Adobe-XD</Typography>
                                </CardActionArea>
                            </Card>


                            <Card
                                onClick={()=>setSelected("c")}
                                sx={{...getStyle("c")}}>
                                <CardActionArea>
                                    <Typography>C</Typography>

                                    <Typography sx={{p:2}}>Invision</Typography>
                                </CardActionArea>
                            </Card>


                            <Card
                                onClick={()=>setSelected("d")}
                                sx={{...getStyle("d")}}>
                                <CardActionArea>
                                    <Typography>D</Typography>

                                    <Typography sx={{p:2}}>Sketch</Typography>
                                </CardActionArea>
                            </Card>
                        </Stack>
                </Box>
            </Stack>
        </div>
    )
}

export default Quiz;