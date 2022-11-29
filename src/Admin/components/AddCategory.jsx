import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {Box} from "@mui/system";
import SyncIcon from '@mui/icons-material/Sync';
import {Container, Stack, TextField} from "@mui/material";
import {useState} from "react";
import {AxiosInstance, AxiosInstanceFormData} from "../../AxiosInstance.mjs";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddCategory(props) {
    const [open, setOpen] = React.useState(false);

    // form variables
    const [name_tm,setNameTm]=useState('');
    const [name_ru,setNameRu]=useState('');
    const [image,setImage]=useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFile=(e)=>{
        setImage(e.target.files[0]);
    }

    function addCategory(){
        let formData=new FormData();
        formData.append('cat_image',image);
        formData.append('name_tm',name_tm);
        formData.append('name_ru',name_ru);
        AxiosInstanceFormData.post('/add-category',formData)
            .then(result=>{
                props.getData();
                setImage('');
                setNameTm('')
                setNameRu('')
                handleClose()
                alert('Success');
            })
            .catch(err=>{
                alert(err.toString());
            })
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add category
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                            Sound
                        </Typography>
                        <Button autoFocus color="inherit" onClick={addCategory}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box>
                    <Container fixed sx={{mt:3}}>
                        <Stack alignItems={'center'} justifyContent={'center'} spacing={3}>
                            <TextField
                             label={'Name turkmen'}
                             variant={'outlined'}
                             fullWidth={true}
                             value={name_tm}
                             onChange={e=>setNameTm(e.target.value)}
                            />

                            <TextField
                                label={'Name russian'}
                                variant={'outlined'}
                                fullWidth={true}
                                value={name_ru}
                                onChange={e=>setNameRu(e.target.value)}
                            />

                            <input type={'file'}
                                onChange={handleFile}
                            />
                        </Stack>
                    </Container>
                </Box>
            </Dialog>
        </div>
    );
}
