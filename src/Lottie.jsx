import React, {useState, useEffect} from 'react';
import {Controls, Player} from "@lottiefiles/react-lottie-player";
import Button, {CardView} from "./components/Common/Button";

const Lottie = (props) => {
    return (
        <div style={{backgroundColor:'black'}}>
            <Player
                autoplay
                loop
                src="/404.json"
                style={{ height: '500px', width: '500px' }}
            >
                {/*<Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />*/}
            </Player>


            <Button href={"/hello"}>Click me</Button>
            <CardView>
                Hello world
            </CardView>

            <CardView>
                Hello world
            </CardView>

            <CardView>
                Hello world
            </CardView>
            <br/>
        </div>
    )
}

export default Lottie;