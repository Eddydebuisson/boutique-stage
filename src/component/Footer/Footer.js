import './Footer.css';
import React from 'react';

const Footer = () =>
{
    return (
        <>
            <footer className='footer'>
                <div className='hr'></div>
                <div className='navigationFooter'>
                    <div className='left'>

                    </div>
                    <div className='center'>
                        <div className='NavFooter'>
                            <h5>Services</h5>
                        </div>
                        <div className='NavFooter'>
                            <h5>Sociaux</h5>
                        </div>
                    </div>
                    <div className='right'></div>
                </div>
            </footer>

        </>

    )

};

export default Footer;