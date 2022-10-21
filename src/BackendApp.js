import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Box, Card, CardActionArea, CardContent, Container, Grid, Modal, Typography} from "@mui/material";
import AddPost from "./AddPost";
import {AxiosInstance} from "./AxiosInstance.mjs";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow:'scroll',
    height:'100%',
    display:'block'
};

function BackendApp() {

    const [list, setList] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [comments,setComments]=useState([]);

    function getPosts() {
        AxiosInstance.get('/posts')
            .then(response => {
                setList(response.data);
            })
            .catch(err => {
                alert(err);
            })
    }

    useEffect(() => {
        getPosts();// This function will run on startup when page is loaded
    }, []);


    function click(item){
        AxiosInstance.get(`/comments?postId=${item.id}`)
            .then(response=>{
                setComments(response.data);
                handleOpen()
            })
            .catch(err=>{
                alert(err);
            })
    }





    return (
        <div>
            <Container fixed>
                <Grid container spacing={3}>

                    {
                        list.map((item,i)=>{
                            return(
                                <Grid key={`card-${i}`} item xs={6} sm={6} md={3}>
                                    <Card onClick={()=>click(item)}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography sx={{
                                                    fontSize:'16px',
                                                    fontWeight:'bold'}}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize:'12px'
                                                }}>
                                                    {item.body}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Container>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    {
                        comments.map((item,i)=>{
                            return(
                                <Typography key={`comment-${i}`} id="modal-modal-description" sx={{ mt: 2 }}>
                                    <b>{item.email}</b> : <br/>
                                    <i>{item.body}</i>
                                </Typography>
                            )
                        })
                    }

                </Box>
            </Modal>


            <div>
                <AddPost list={list} setList={setList}/>
            </div>



        </div>
    )
}

export default BackendApp;