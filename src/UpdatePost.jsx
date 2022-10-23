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
    const handleOpen = () => {
        setOpen(true);
        setTitle(props.item.title);
        setBody(props.item.body);
    }
    const handleClose = () => setOpen(false);

    // This code will run once
    const [title,setTitle]=useState(props.item.title);
    const [body,setBody]=useState(props.item.body);

    function click(){
        let data={
            id:props.item.id,
            title:title,
            body:body,
            userId: 1
        }
       AxiosInstance.put(`/posts/${props.item.id}`,data)
           .then(response=>{
               let temp=[
                   ...props.list.slice(0,props.index),// 0,1,2
                   data,//3
                   ...props.list.slice(props.index+1, props.list.length)//4...100
               ];
               props.setList(temp);
               handleClose();
           })
           .catch(err=>{
               alert(err);
           })
    }
    return (
        <div>
            <Button
                variant={'text'} onClick={handleOpen}>Edit</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{...style,mt:5,mb:5}}>

                    <Stack direction={'column'} sx={{width:'100%'}} spacing={3}>
                        <Typography sx={{width:'100%',fontSize:'18px'}}>Update post</Typography>
                        <TextField
                            value={title}
                            onChange={e=>setTitle(e.target.value)}
                            variant={'outlined'} label={'Title'}/>
                        <TextField
                            value={body}
                            onChange={e=>setBody(e.target.value)}
                            onKeyDown={e=>{
                                if(e.key==='Enter'){
                                    click();
                                }
                            }}
                            variant={'outlined'} label={'Body'}/>
                        <Button onClick={click} variant={'contained'}>Update</Button>
                    </Stack>

                </Box>

            </Modal>
        </div>
    )
}

export default AddPost;