import React, {useEffect, useState} from 'react';
import MyCardLoading from "../components/State/Loading/MyCardLoading";
import {Button, Skeleton, Typography} from "@mui/material";

const Test=(props)=>{
    const [isLoading,setLoading]=useState(true);
    useEffect(()=>{
        // do something when page is opening
        setTimeout(()=>{
            setLoading(false);
        },5000);
    },[])
    return(
        <div>
                isLoading?
                    <MyCardLoading/>
                    :
                    <Button>
                        I am after loading
                    </Button>
            }
        </div>
    )
}

export default Test;