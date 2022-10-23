import React, {useEffect, useState} from 'react';
import {AxiosInstance} from "./AxiosInstance.mjs";
import {
    Alert,
    Backdrop,
    Button,
    CircularProgress,
    Grid,
    Pagination,
    Paper,
    Skeleton, Snackbar,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from "mui-image";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const API='563492ad6f91700001000001c8d9d74632b34b58b67dc1a107c0b957';

function Pexels(){
    const [list,setList]=useState([]);
    const [search,setSearch]=useState('people');
    const [page,setPage]=useState(1);
    const [images,setImages] = useState([]);
    const [photoIndex,setPhotoIndex]=useState(0);
    const [isOpen ,setIsOpen]=useState(false);
    const [count,setCount]=useState(0);
    const [loading,setLoading]=useState(true);


    const [alertType,setType]=useState('success');
    const [alertOpen,setAlertOpen]=useState(false);
    const [alertMessage,setAlertMessage]=useState('');


    function showAlert(type,message){
        setType(type);
        setAlertMessage(message);
        setAlertOpen(true);
    }


    function hideLoading(){
        setLoading(false);
    }
    const perPage=40;

    function getImages(){
        setLoading(true);
        AxiosInstance.get(`/v1/search?query=${search}&page=${page}&per_page=${perPage}`)
            .then(response=>{
                setCount(Math.ceil(response.data.total_results/perPage));
                setList(response.data.photos);
                setLoading(false);
                showAlert('success',"Ustunlikli")
            })
            .catch(err=>{
                setLoading(false);
                showAlert('error',err+"");
            })
    }

    useEffect(()=>{
        console.log(images);
    },[images]);


    useEffect(()=>{
        setImages(list.map(item=>item.src.original));
    },[list]);





    useEffect(()=>{
        getImages();
    },[page])





    return(
        <div>
            <center>
                <Paper sx={{
                    position:'fixed',
                    top:5,
                    left:'35%',
                    zIndex:1
                }}>
                    <Stack direction={'row'}>
                        <Button onClick={()=>{
                            let t=page-1;
                            setPage(t);
                        }}>Prev</Button>
                        <TextField
                            value={search}
                            onChange={e=>setSearch(e.target.value)}
                            onKeyDown={e=>{
                                if(e.key==='Enter'){
                                    getImages();
                                }
                            }}
                            label={"Search..."}/>
                        <Button onClick={()=>{
                            let t=page+1;
                            setPage(t);
                        }}>Next</Button>
                    </Stack>
                </Paper>
            </center>
            <Grid container spacing={3}>
                {
                    list.map((item,i)=>{
                        return(
                            <Grid
                                onClick={()=>{
                                    setIsOpen(true);
                                    setPhotoIndex(i);
                                }}
                                key={`img-${i}`} item xs={12} sm={12} md={4}>
                                {/*<img src={item.src.original} style={{*/}
                                {/*    width:'100%',*/}
                                {/*    height:'200px',*/}
                                {/*    objectFit:'cover'*/}
                                {/*}} alt={item.alt}/>*/}
                                <Image
                                    alt={item.alt}
                                    src={item.src.small}
                                    fit={'cover'}
                                    wrapperStyle={{
                                        width:'100%',
                                        height:'200px'
                                    }}
                                    showLoading={
                                        <Skeleton animation={'wave'} sx={{width:'100%',height:'350px'}}/>
                                    }
                                    style={{
                                        width:'100%',
                                        height:'200px'
                                    }}
                                    // use normal <img> attributes as props
                                     />
                            </Grid>
                        )
                    })
                }
            </Grid>


            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}

            <Stack direction={'row'} justifyContent={'center'} sx={{width:'100%'}}>
                <Pagination
                    color={'primary'}
                    page={page}
                    onChange={(e,value)=>setPage(value)}
                    count={count}/>
            </Stack>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
                onClick={hideLoading}
            >
                <Stack alignItems={'center'} justifyContent={'center'}>
                    <CircularProgress color="inherit" />
                    <Typography>Please wait...</Typography>
                </Stack>

            </Backdrop>


            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={()=>setAlertOpen(false)}>
                <Alert onClose={()=>setAlertOpen(false)} severity={alertType} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Pexels;