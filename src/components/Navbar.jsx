import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <div>Navbar</div>
            <div style={{display: "flex", gap: "2rem"}}>
                <NavLink to={"/home"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </div>
        </div>
    );
};

export default Navbar;