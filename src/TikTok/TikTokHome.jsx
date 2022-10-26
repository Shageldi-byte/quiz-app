import React, {useState, useEffect, useRef} from 'react';
import {Avatar, Box, Divider, IconButton, Stack, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import {AxiosInstance} from "../AxiosInstance.mjs";

const TikTokHome = (props) => {
    const video=useRef();
    const [list,setList]=useState([]);
    function getVideos(){
        AxiosInstance.get('/videos/search?query=football&per_page=40')
            .then(response=>{
                setList(response.data.videos);
            })
            .catch(err=>{
                alert(err);
            })
    }

    useEffect(()=>{
        getVideos();
    },[])
    return (
        <div style={{backgroundColor:'#000000'}}>
            <Stack sx={{mt:3,position:'fixed',top:0,width:'100%'}} spacing={3} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                <Typography>
                    Following
                </Typography>
                <Divider color={'white'} orientation={'vertical'} flexItem/>
                <Typography>
                    For you
                </Typography>
            </Stack>

            <Stack alignItems={'center'} justifyContent={'center'} sx={{position:'fixed',bottom:100,right:0}}>
                <Avatar sx={{width:60,height:60}} src={'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'}>V</Avatar>
                <IconButton>
                    <FavoriteIcon sx={{width:50,height:50}}/>
                </IconButton>

                <IconButton>
                    <TextsmsIcon sx={{width:50,height:50}}/>
                </IconButton>

                <IconButton>
                    <ShareIcon sx={{width:50,height:50}}/>
                </IconButton>
            </Stack>

            <Stack sx={{position:'fixed',bottom:100,width:'80%',p:4}}>
                <Typography variant={'h5'}>Video name</Typography>
                <Typography>desc</Typography>
            </Stack>
            {
                list.map((item,i)=>{
                    return(
                        <Box key={`key-${i}`}>
                            <video
                                ref={video}
                                onClick={()=>video.current.play()}
                                autoPlay={true}
                                controls
                                style={{width:'100%',height:'100vh'}}
                                src={item.video_files[0].link}/>
                        </Box>
                    )
                })
            }
        </div>
    )
}

export default TikTokHome;