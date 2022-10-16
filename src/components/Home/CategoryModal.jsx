import React, {useState, useEffect} from 'react';
import {Box, Button, Chip, Grid, IconButton, Modal, Stack, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {Colors, Fonts} from "../../app/theme.mjs";
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const selectedChipStyle={
    borderRadius:0,
    background:Colors.primary,
    color:Colors.darkText,
    "&:hover":{
        background:Colors.primary
    }
}

const UnselectedChipStyle={
    borderRadius:0,
    background:"#D1D1D1",
    color:Colors.darkText,
    "&:hover":{
        background:Colors.primary
    }
}


const CategoryModal = (props) => {
    const [selected,setSelected]=useState([]);
    const handleClose=()=>{
        setSelected([]);
        props.open.setOpen(false)
    };

    const categories=[
        "Computer",
        "Math",
        "Music",
        "Biology",
        "Cyber security",
        "AI",
        "Machine learning",
        "Physics",
        "Information Technology",
        "Database",
        "Front end development",
        "UI/UX",
        "Backend"
    ];



    function getStyle(name){
        if(selected.includes(name)){
            return selectedChipStyle;
        }
        return UnselectedChipStyle;
    }

    function chipClick(name){
        if(selected.includes(name)){
            let temp=selected.filter(item=>item!==name);
            setSelected(temp);
        } else {
            let temp=[
                ...selected,
                name
            ];
            setSelected(temp);
        }
    }

    function deleteSelected(name){
        let temp=selected.filter(item=>item!==name);
        setSelected(temp);
    }

    const navigate=useNavigate();



    return (
        <Modal open={props.open.open} onClose={handleClose}>
            <Box sx={{...style}}>
               <Stack sx={{width:'100%'}} spacing={3}>
                   <Stack direction={'row'} justifyContent={'flex-end'}>
                       <IconButton onClick={handleClose}>
                           <CloseIcon/>
                       </IconButton>
                   </Stack>

                   <Typography sx={{
                       fontFamily:Fonts.bold,
                       fontSize:'32px',
                       width:'100%',
                       textAlign:'center'
                   }}>
                       Choose your favorite topic
                   </Typography>

                   <Typography sx={{
                       fontFamily:Fonts.regular,
                       fontSize:'14px',
                       width:'100%',
                       textAlign:'center'
                   }}>
                       Select more than 5 topics to start quiz
                   </Typography>


                   <Grid container spacing={2}>
                       {
                           categories.map((item,i)=>{
                               return(
                                   <Grid key={`cat-${i}`} item xs={6} sm={6} md={2.3}>
                                       <Chip
                                           label={item}
                                           onClick={()=>chipClick(item)}
                                           sx={{...getStyle(item)}}
                                           onDelete={()=>deleteSelected(item)}
                                       />
                                   </Grid>
                               )
                           })
                       }
                   </Grid>

                   <Stack sx={{width:'100%'}} direction={'row'} justifyContent={'flex-end'}>
                       <Button
                           onClick={()=>navigate('/quiz')}
                           disabled={selected.length<5}
                           sx={{width:140,
                           color:"#FFFFFF",
                           fontFamily:Fonts.medium,
                           fontSize:'14px',
                           textTransform:'none'}} fullWidth={false} variant={'contained'}>
                           Start Quiz
                       </Button>
                   </Stack>
               </Stack>
            </Box>
        </Modal>
    )
}

export default CategoryModal;