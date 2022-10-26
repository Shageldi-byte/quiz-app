import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from './state/index'
import RHome from "./RHome";
import {onMessageListener, requestForToken} from "./firebase";

export default function RApp(){
    const count=useSelector((state)=>state.counter);
    console.log(count);
    const dispatch=useDispatch();
    const {decreament,increament}=bindActionCreators(actionCreators,dispatch);


    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({title: '', body: ''});
    const [isTokenFound, setTokenFound] = useState(false);
    requestForToken(setTokenFound);

    onMessageListener().then(payload => {
        setShow(true);
        setNotification({title: payload.notification.title, body: payload.notification.body})
        console.log(payload);
    }).catch(err => console.log('failed: ', err));


    useEffect(()=>{
        alert(notification.title)
    },[notification])

    return(
        <div>
            <button onClick={()=>decreament(1)}>-</button>
            {count}
            <button onClick={()=>increament(1)}>+</button>

            <RHome/>
        </div>
    )
}