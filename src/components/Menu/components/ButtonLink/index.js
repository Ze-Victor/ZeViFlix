import React from 'react';

function ButtonLink(props){
    // props => {className: "NOME CLASSE", href: "Link"}
    return(
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;