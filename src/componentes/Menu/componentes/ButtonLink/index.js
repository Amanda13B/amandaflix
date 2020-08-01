import React from 'react';
import {Link} from 'react-router-dom';

function ButtonLink(props)
{
    // props => {className: "valorPassado", href: "/" }
    return (
        <Link className={props.className} to={props.to}>
            {props.children}
        </Link>
    );
}

export default ButtonLink;