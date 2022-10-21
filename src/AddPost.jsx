import React, {useState, useEffect} from 'react';
import {Box, Button, Modal, Stack, TextField, Typography} from "@mui/material";
import axios from "axios";
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
const AddPost = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');

    function click(){
        let data={
            title:title,
            body:body,
            userId: 1
        }
       AxiosInstance.post('/posts',data)
           .then(response=>{
               data.id=response.data;
               let temp=[
                   data,
                   ...props.list
               ];
               props.setList(temp);
               setTitle("");
               setBody("");
               handleClose();
           })
           .catch(err=>{
               alert(err);
           })
    }
    return (
        <div>
            <Button
                sx={{
                    position:'fixed',
                    bottom:40,
                    right:40
                }}
                variant={'contained'} onClick={handleOpen}> + Add Post</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{...style,mt:5,mb:5}}>

                    <Stack direction={'column'} sx={{width:'100%'}} spacing={3}>
                        <Typography sx={{width:'100%',fontSize:'18px'}}>Add new post</Typography>
                        <TextField
                            value={title}
                            onChange={e=>setTitle(e.target.value)}
                            variant={'outlined'} label={'Title'}/>
                        <TextField
                            value={body}
                            onChange={e=>setBody(e.target.value)}
                            variant={'outlined'} label={'Body'}/>
                        <Button onClick={click} variant={'contained'}>Add</Button>
                    </Stack>

                </Box>

            </Modal>
        </div>
    )
}

export default AddPost;