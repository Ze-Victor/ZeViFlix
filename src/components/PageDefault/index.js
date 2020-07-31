import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`

    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;

`;

/*

    - Caso eu queira, posso abrir o props 'destructor' e no parametro vai
ficar {children} e dentro da função também usa {chlidren};

    - Para remover esse encadeamento de div, eu posso usar a fragmentação
do React com a tag <React.Fragment></React.Fragment> no lugar das div's ou
simplimente apagar o nome div
*/

function PageDefault(props){
    return(
        <>
            <Menu/>
                <Main>
                    {props.children}
                </Main>
            <Footer/>
        </>
        
    );   
};

export default PageDefault;