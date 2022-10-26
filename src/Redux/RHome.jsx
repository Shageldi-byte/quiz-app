import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";

const RHome = (props) => {
    const count=useSelector((state)=>state.counter);
    return (
        <div>
            <h2>{count} FROM RHome.jsx</h2>
        </div>
    )
}

export default RHome;