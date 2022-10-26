import React, {useEffect, useState} from 'react';
import {Button, Grid, Stack, TextField, Typography} from "@mui/material";
import {io} from "socket.io-client";

const socket = io('http://192.168.1.35:12345', {
    autoConnect: true,
    transports: ['websocket']
});


function PusherApp() {
    let username = localStorage.getItem('username');
    useEffect(() => {
        if (typeof username === 'undefined' || username === null || username === '') {
            username = window.prompt('Enter your username');
            localStorage.setItem('username', username);
        }
    }, [])
    const [value, setValue] = useState('');
    const [myId, setMyId] = useState('');
    const [list, setList] = useState([]);

    socket.on("connect", () => {
        setMyId(socket.id);
    });
    socket.on('onChat', (data) => {
        let temp = [
            ...list,
            data
        ];
        setList(temp);
        console.log(data);
    })

    function send() {
        socket.emit('onChat', {message: value, userId: myId, username: username});
    }

    return (
        <div>
            <Grid container sx={{p: 2}} spacing={2}>
                {
                    list.map((item, i) => {
                        return (
                            item.userId !== myId ?
                                <Grid item xs={12} key={`rec-${i}`}>
                                    <Stack className={'received-chat'} sx={{width: '100%'}}>
                                        <Typography
                                            sx={{backgroundColor: 'orange', p: 3, borderRadius: '12px', width: '45%'}}>
                                            {item.message}
                                        </Typography>
                                        <label>{item.username}</label>
                                    </Stack>
                                </Grid>
                                :
                                <Grid item xs={12} key={`sent-${i}`}>
                                    <Stack direction={'row'} justifyContent={'flex-end'} className={'sent-chat'}
                                           sx={{width: '100%'}}>
                                        <Typography
                                            sx={{backgroundColor: 'lime', p: 3, borderRadius: '12px', width: '45%'}}>
                                            {item.message}
                                        </Typography>
                                    </Stack>
                                </Grid>
                        )
                    })
                }

            </Grid>
            <Stack
                sx={{position: 'fixed', bottom: 10, width: '100%'}}
                direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={3}>
                <div style={{width: '50px'}}></div>
                <TextField
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    label={'Message'} variant={'filled'} sx={{width: '100%'}}/>
                <Button onClick={() => send()} variant={'contained'}>
                    Send
                </Button>
                <div style={{width: '50px'}}></div>
            </Stack>
        </div>
    )
}

export default PusherApp;