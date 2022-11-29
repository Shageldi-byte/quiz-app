import React, {useState, useEffect} from 'react';
import {Button, Container, Stack, TextField} from "@mui/material";
import {AxiosInstance} from "../../AxiosInstance.mjs";
import axios from "axios";

const Login = (props) => {
    const [phone_number, setPhoneNumber] = useState('+9936');
    const [isConfirm,setConfirm]=useState(false);
    const [code,setCode]=useState('');
    const [btnText,setText]=useState('Login');

    function login() {
        if (phone_number == '' || code == '') {
            alert('Enter required informations');
        } else {
            axios.post('http://localhost:5678/auth/sign-in', {
                phone_number: phone_number,
                code:code
            }, {
                headers: {
                    'u-sec':'ueuryerewurewryuew-43243-43'
                }
            })
                .then(response => {
                    if (!response.data.error) {
                        window.sessionStorage.setItem('token', response.data.body.token);
                        window.location.href = '/';
                    }
                })
                .catch(err => {
                    alert(err.toString())
                })
        }
    }
    function verify() {
        if (phone_number == '') {
            alert('Enter required informations');
        } else {
            axios.post('http://localhost:5678/auth/verify-phone', {
                phone_number: phone_number
            }, {
                headers: {
                    'u-sec':'ueuryerewurewryuew-43243-43'
                }
            })
                .then(response => {
                    if (!response.data.error) {
                        setConfirm(true);
                        setText('Check confirmation');
                    }
                })
                .catch(err => {
                    alert(err.toString())
                })
        }
    }


    return (
        <div>
            <Container fixed sx={{mt: 5}}>
                <Stack alignItems={'center'} spacing={3} justifyContent={'center'}>
                    <TextField
                        label={'Phone number'}
                        type={'text'}
                        variant={'outlined'}
                        value={phone_number}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />

                    {
                        isConfirm?
                            <TextField
                                label={'Confirmation code'}
                                type={'number'}
                                variant={'outlined'}
                                value={code}
                                onChange={e => setCode(e.target.value)}
                            />:null
                    }

                    <Button variant={'contained'} onClick={isConfirm?login:verify}>
                        {btnText}
                    </Button>
                </Stack>
            </Container>
        </div>
    )
}

export default Login;