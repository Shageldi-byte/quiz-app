import React, {useState, useEffect, useContext} from 'react';
import {Card, CardActionArea, Skeleton, Stack, Typography} from "@mui/material";
import Image from "mui-image";
import {Fonts} from "../../app/theme.mjs";
import '../../style/category.css'
import {AppContext} from "../../App";

const CategoryCard = (props) => {
    const {isMobile} = useContext(AppContext);
    return (
       props.isLoading?
           <Skeleton sx={{width:'100%',height:'200px'}} variant={'rounded'}/>
           :
           <Card sx={{width:'100%',height:'200px'}}>
               <CardActionArea>
                   <Image
                       fit={'cover'}
                       wrapperStyle={{height:'200px',position:'absolute',zIndex:1}}
                       src={props.item.image}/>

                   <Stack justifyContent={'center'} className={'category-text'} alignItems={'center'} sx={{width:'100%',height:'200px',position:'absolute',zIndex:2}}>
                       <Typography sx={{fontFamily:Fonts.semiBold,color:'#FFFFFF',
                           fontSize:'20px',
                            textShadow:'1px 0px #000000'}}>{props.item.title}</Typography>
                   </Stack>
               </CardActionArea>
           </Card>
    )
}

export default CategoryCard;