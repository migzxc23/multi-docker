import React from 'react';
import { NavLink } from 'react-router-dom';

const OtherPage = () => {
    return (
        <div>
            I'm some other page!
            <NavLink to="/">Go back home</NavLink>
        </div>
    );
};

export default OtherPage;
