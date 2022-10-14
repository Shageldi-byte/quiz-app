import React, {useState, useEffect} from 'react';
import {Button, Checkbox, Container, FormControlLabel, Grid, Paper, Stack, TextField, Typography} from "@mui/material";
import {Colors, containedButton, Fonts, mediumFont, regularFont, textButton} from "../app/theme.mjs";

const SignIn = (props) => {

    const [firstFocused,setFirst]=useState(false);
    const [secondFocused,setSecond]=useState(false);


    return (
        <Paper elevation={0}>
            <Container fixed>
                <Grid container alignItems={'center'} sx={{paddingTop:6,paddingBottom:6}}>
                    <Grid sm={12} xs={12} md={6}>
                        <Stack
                            spacing={3}
                            direction={'column'} alignItems={'center'} justifyContent={'center'}>
                            <img src={"/images/logo.svg"} alt={"logo"}
                                 style={{width:"230px"}}
                            />
                            <Typography sx={{...regularFont,textAlign:'center',fontSize:'14px'}}>
                                Welcome  back!<br/>
                                Please login/Signup to your account.
                            </Typography>


                           <Stack sx={{width:'100%'}}>
                               <Stack
                                   direction={'row'}
                                   sx={{width:'100%',paddingLeft:'4px',paddingRight:'4px',
                                       border:`1px solid ${Colors.stroke}`,
                                       borderLeft:firstFocused?`5px solid ${Colors.primary}`:''
                                   }}

                               >
                                   <TextField
                                       label={"Email address"}
                                       fullWidth
                                       variant={'standard'}
                                       type={'email'}
                                       sx={{...mediumFont,fontSize:'12px',outline:'none',border:'none'}}
                                       color={'primary'}
                                       onFocus={e=>setFirst(true)}
                                       onBlur={e=>setFirst(false)}
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                                   />
                               </Stack>

                               <Stack
                                   direction={'row'}
                                   sx={{width:'100%',paddingLeft:'4px',paddingRight:'4px',
                                       border:`1px solid ${Colors.stroke}`,
                                       borderTop:'none',
                                       borderLeft:secondFocused?`5px solid ${Colors.primary}`:''
                                   }}

                               >
                                   <TextField
                                       label={"Password"}
                                       fullWidth
                                       type={"password"}
                                       variant={'standard'}
                                       sx={{...mediumFont,fontSize:'12px',outline:'none',border:'none'}}
                                       color={'primary'}
                                       onFocus={e=>setSecond(true)}
                                       onBlur={e=>setSecond(false)}
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                                   />
                               </Stack>
                           </Stack>

                            <Stack direction={'row'}
                                   sx={{width:'100%'}}
                                   alignItems={'center'}
                                   justifyContent={'space-between'}>
                                <FormControlLabel control={<Checkbox size={'small'}/>}
                                                  componentsProps={{
                                                      typography:{sx:{...regularFont,fontSize:'12px'}}
                                                  }}
                                                  label={"Remember me"}/>

                                <Typography sx={{...regularFont,fontSize:'12px',textAlign:'end'}}>
                                    Forgot password?
                                </Typography>
                            </Stack>


                           <Stack
                               spacing={3}
                               direction={'row'} sx={{width:'100%'}}>
                               <Button variant={'contained'}
                                       sx={{...containedButton}}
                               >
                                   Login
                               </Button>

                               <Button variant={'outlined'} sx={{borderRadius:0,
                                    boxShadow:'0px 10.4502px 23.2228px -6.96683px #FBE18F'
                               }}>
                                   Sign up
                               </Button>
                           </Stack>


                            <Stack spacing={3}
                                   alignItems={'center'}
                                   direction={'row'} sx={{width:'100%'}}>

                                <Typography sx={{...regularFont,fontSize:'10px'}}>
                                    Or login with
                                </Typography>

                                <Button sx={{
                                    fontFamily:Fonts.medium,
                                    color:'primary',
                                    fontSize:'10px',
                                    textTransform:'capitalize'
                                }}>
                                    Facebook
                                </Button>

                                <Button sx={{
                                    fontFamily:Fonts.medium,
                                    color:'primary',
                                    fontSize:'10px',
                                    textTransform:'capitalize'
                                }}>
                                    Google
                                </Button>


                            </Stack>

                        </Stack>

                    </Grid>

                    <Grid  xs={12} sm={12} md={6} alignItems={'center'} justifyContent={'center'}>
                        <Stack sx={{width:'100%'}} alignItems={'center'}>
                            <img src={"/images/graduate.svg"}
                                 style={{width:'50%'}}
                                 alt={"graduate"}/>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}

export default SignIn;