import React from 'react';
import '../Components/Home.css'


export default class Home extends React.Component {
    render() {
        return (
            <div className="title-container">
                <div className="about">
                    <h1>Insurance that Works for You</h1>
                    <p style={{ marginLeft: '25vh' }}>Smart.Simple.Affordable</p>
                </div>
                
            </div >
        );
    }
}