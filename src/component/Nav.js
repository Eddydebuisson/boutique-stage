
import '../component/nav/nav.css';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Nav = () =>
{
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <NavLink to="/" className='brand'><img src={logo} /></NavLink>
                <ul className='nav-links'>
                    <li><NavLink to="/" className='link-item'>Accueil</NavLink></li>
                    <li><NavLink to="/" className='link-item'>Categorie</NavLink></li>
                    <li><NavLink to="/" className='link-item'>Categorie</NavLink></li>
                    <li><NavLink to="/" className='link-item'>Categorie</NavLink></li>
                    <li><NavLink to="/" className='link-item'>UNIVERS ENFANT</NavLink></li>
                    <li><NavLink to="/" className='link-item'>Accessoires</NavLink>
                    </li>

                </ul>

                <NavLink to="/" className='right-item'>Recherche</NavLink>
                <NavLink to="/" className='right-item'>Profil</NavLink>
                <NavLink to="/" className='right-item'>Panier</NavLink>
            </nav>
            <Menu className='burger'>
                <nav>
                    <NavLink to="/" className='brand'></NavLink>
                    <ul className='nav-links'>
                        <li><NavLink to="/" className='link-item'>Accueil</NavLink></li>
                        <li><NavLink to="/" className='link-item'>Categorie</NavLink></li>
                        <li><NavLink to="/" className='link-item'>Categorie</NavLink></li>
                        <li><NavLink to="/" className='link-item'>Categorie</NavLink></li>
                        <li><NavLink to="/" className='link-item'>UNIVERS ENFANT</NavLink></li>
                        <li><NavLink to="/" className='link-item'>Accessoires</NavLink></li>
                    </ul>

                    <NavLink to="/" className='right-item'>Recherche</NavLink>
                    <NavLink to="/" className='right-item'>Profil</NavLink>
                    <NavLink to="/" className='right-item'>Panier </NavLink>

                </nav>



            </Menu>

        </>

    )

};

export default Nav;