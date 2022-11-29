import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from './state/index'
import RHome from "./RHome";
import {onMessageListener, requestForToken} from "./firebase";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
        // alert(notification.title)
    },[notification])

    return(
        <div>
            <button onClick={()=>decreament(1)}>-</button>
            {count}
            <button onClick={()=>increament(1)}>+</button>

            <RHome/>

            <OwlCarousel className='owl-theme' loop={false} items={2} margin={10} nav={false}>
                <div class='item'>
                    <h4>1</h4>
                </div>
                <div class='item'>
                    <h4>2</h4>
                </div>
                <div class='item'>
                    <h4>3</h4>
                </div>
                <div class='item'>
                    <h4>4</h4>
                </div>
                <div class='item'>
                    <h4>5</h4>
                </div>
                <div class='item'>
                    <h4>6</h4>
                </div>
                <div class='item'>
                    <h4>7</h4>
                </div>
                <div class='item'>
                    <h4>8</h4>
                </div>
                <div class='item'>
                    <h4>9</h4>
                </div>
                <div class='item'>
                    <h4>10</h4>
                </div>
                <div class='item'>
                    <h4>11</h4>
                </div>
                <div class='item'>
                    <h4>12</h4>
                </div>
            </OwlCarousel>
        </div>
    )
}