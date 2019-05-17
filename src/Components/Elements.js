import React from 'react';
import InsuredGIF from './img/InsuredGIF.png'
import SelectGIF from './img/SelectGIF.png'
import DeviceGIF from './img/DeviceGIF.png'

export default class Elements extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ marginLeft: '80vh' }}>It's Easier that you think</h1>
                <img style={{ marginLeft: '10vh' }} src={DeviceGIF} alt="DeviceGIF"/>
                <img style={{ marginLeft: '5vh' }} src={SelectGIF} alt="SelectGIF" />
                <img style={{ marginLeft: '5vh' }} src={InsuredGIF} alt="InsuredGIF" />

            </div>
        );
    }
}

