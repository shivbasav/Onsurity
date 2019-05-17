import React from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css'

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="App-header">

                <header>
                    <NavLink to="/" className="header" style={{ marginRight: '80vh' }}>Onsurity</NavLink>
                    <NavLink to="/claims" className="header" style={{ marginLeft: '65vh' }}>Claims</NavLink>
                    <NavLink to="/About" className="header">About</NavLink>
                    <NavLink to="/Contact" className="header">ContactUs</NavLink>
                    <NavLink to="/login" className="header" style={{ marginRight: '35vh' }}>Login</NavLink>
                </header>
            </div >
        );
    }
}    