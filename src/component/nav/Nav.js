
import './Nav.css';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import React from 'react';

const Nav = () =>
{
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className='navTop'><p className='pNav'>Livraison Offerte dès 55€ d'achat ! -10% sur toute la boutique code : bienvenue</p></div>
                <div className='navCenter'>
                    <NavLink to="/" className='brand'><img src={Logo} /></NavLink>
                    <ul className='nav-links'>
                        <li><NavLink to="/" className='link-item'>Accueil</NavLink></li>
                        <li><NavLink to="/Ecoresponsable" className='link-item'>Eco-Responsable</NavLink></li>
                        <li><NavLink to="/Tshirt" className='link-item'>T-Shirt</NavLink></li>
                        <li><NavLink to="/Pull" className='link-item'>Pull</NavLink></li>
                        <li><NavLink to="/Enfant" className='link-item'>UNIVERS ENFANT</NavLink></li>
                        <li><NavLink to="/Accessoire" className='link-item'>Accessoires</NavLink>
                        </li>

                    </ul>

                    <NavLink to="/" className='right-item'>Recherche</NavLink>
                    <NavLink to="/" className='right-item'>Profil</NavLink>
                    <NavLink to="/Panier" className='right-item'>Panier</NavLink>

                </div>
                <div className='navBottom'></div>
            </nav>
            <Menu className='burger'>
                <nav>
                    <NavLink to="/" className='brand'></NavLink>
                    <ul className='nav-links'>
                        <li><NavLink to="/" className='link-item'>Accueil</NavLink></li>
                        <li><NavLink to="/Ecoresponsable" className='link-item'>Eco-Responsable</NavLink></li>
                        <li><NavLink to="/Tshirt" className='link-item'>T-Shirt</NavLink></li>
                        <li><NavLink to="/Pull" className='link-item'>Pull</NavLink></li>
                        <li><NavLink to="/Enfant" className='link-item'>UNIVERS ENFANT</NavLink></li>
                        <li><NavLink to="/Accessoire" className='link-item'>Accessoires</NavLink></li>


                    </ul>

                    <NavLink to="/" className='right-item'>Recherche</NavLink>
                    <NavLink to="/" className='right-item'>Profil</NavLink>
                    <NavLink to="/Panier" className='right-item'>Panier </NavLink>
                </nav>



            </Menu>

        </>

    )

};

export default Nav;