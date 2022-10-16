import React, {useState, useEffect} from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    Container,
    Stack,
    Step,
    StepLabel,
    Stepper,
    Typography
} from "@mui/material";
import {Colors, Fonts, textButton} from "../app/theme.mjs";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FastForwardIcon from '@mui/icons-material/FastForward';

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
    let time=30;

    function startTimer(){
        setInterval(()=>{
            time=time-1;
            setTime()
            if(time===0){
                time=30;
                alert("Next question");
            }
        },1000);
    }
    function setTime(){
        document.getElementById("time").innerHTML=time;
    }
    startTimer()

    // function startTimer(){
    //     setInterval(()=>{
    //
    //     },1000);
    // }


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


               <Box sx={{width:'80%',paddingLeft:'10%',paddingRight:'10%',paddingBottom:'50px'}}>
                   <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                       <Button color={'passiveButton'} startIcon={<ArrowLeftIcon/>} variant={'contained'} sx={{...textButton,backgroundColor:'#D1D1D1',borderRadius:0,p:2}}>
                           Previous
                       </Button>

                       <Stack
                           sx={{
                               backgroundImage:`url(/images/time.svg)`,
                                backgroundSize:'100% 100%',
                               backgroundRepeat:'no-repeat',
                               p:2
                           }}
                       >
                           <label id={'time'}></label>
                       </Stack>

                       <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'flex-end'}>
                           <Button color={'primary'} endIcon={<ArrowRightIcon/>} variant={'contained'} sx={{...textButton,borderRadius:0,p:2,color:'#FFFFFF'}}>
                               Next
                           </Button>

                           <Button sx={{...textButton}} endIcon={<FastForwardIcon/>}>
                               Skip
                           </Button>
                       </Stack>
                   </Stack>
               </Box>
            </Stack>
        </div>
    )
}

export default Quiz;