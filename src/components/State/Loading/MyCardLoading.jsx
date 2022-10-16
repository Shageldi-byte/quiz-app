import React, {useState, useEffect} from 'react';
import {Box, Skeleton, Typography} from "@mui/material";
import {Colors} from "../../../app/theme.mjs";

const MyCardLoading = (props) => {
    return (
        <div>
            <Box mt={10} mb={10} sx={{ width: 300 }}>
                <Skeleton animation={'wave'} variant={'circular'} sx={{width:50,height:50,bgcolor:Colors.primary}}/>
                <br/>
                <Skeleton animation={'wave'} variant={'rectangular'} sx={{width:150,height:50}}/>
                <br/>
                <Skeleton animation={'wave'} variant={'rounded'} sx={{width:150,height:50}}/>
                <br/>


            </Box>
        </div>
    )
}

export default MyCardLoading;