import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import ButtonLink from './componentes/ButtonLink';

function Menu()
{
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo da AmandaFlix"/>
            </Link>

            <ButtonLink className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;