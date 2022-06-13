
import '../component/nav/nav.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';
import React from 'react';




const section = () =>
{
    const [section, setsection] = useState(false);

    return (
        <>
            <section className={section ? 'section active' : 'section'}>
                <NavLink to="/" className='brand'><img src={logo} /></NavLink>

            </section>

        </>

    )

};

export default section;