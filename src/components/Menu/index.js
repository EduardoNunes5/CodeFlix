import React from 'react';
import Logo from '../../assets/img/SeeFlix.png'
import './menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu(){
    return (
        <header>
            <nav className="Menu">
                <a href="/">
                    <img className="Logo" src={Logo} alt="SeeFlix"/>
                </a>

                <Button as="a" href="/" className="ButtonLink">
                    Novo vídeo
                </Button>
            </nav>
        </header>
    );
}

export default Menu;
