import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, IconButton, Skeleton, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Image from "mui-image";
import {AxiosInstance, imageFullPath} from "../../AxiosInstance.mjs";
import AddCategory from "../components/AddCategory";
import UpdateCategory from "../components/UpdateCategory";



const Category = (props) => {
    const [list,setList]=useState([]);
    function getData(){
        AxiosInstance.get('get-category')
            .then(response=>{
                console.log(response.data);
                setList(response.data.body);
            })
            .catch(err=>{
                alert(err.toString());
            })
    }

    useEffect(()=>{
       getData();
    },[])

    function deleteCategory(id){
        if(window.confirm('Do you want delete?')){
            AxiosInstance.delete('/delete-category/'+id)
                .then(response=>{
                    getData()
                    alert('deleted');
                })
                .catch(err=>{
                    alert(err);
                })
        }
    }

    return (
        <div>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'}>
                <AddCategory getData={getData}/>
            </Stack>
            <TableContainer component={Paper} sx={{mt:2}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name TM</TableCell>
                            <TableCell align="right">Name RU</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Delete</TableCell>
                            <TableCell align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((row,index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name_tm}</TableCell>
                                <TableCell align="right">{row.name_ru}</TableCell>
                                <TableCell align="right">
                                    <Image src={imageFullPath(row.image)}
                                           wrapperStyle={{maxWidth:'100px',height:'100px',textAlign:'center'}}
                                           fit={'cover'}
                                        showLoading={<Skeleton sx={{width:'100px',height:'100px'}}/>}
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={()=>deleteCategory(row.id)} color={'error'}>
                                    <DeleteIcon/>
                                </IconButton></TableCell>
                                <TableCell align="right">
                                    <UpdateCategory row={row} getData={getData}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Category;