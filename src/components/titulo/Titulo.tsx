import React from "react";
import styled from "styled-components"

const TituloStyled = styled.h1`
    font-family: sans-serif;
    color: #fff;
    text-shadow: 3px 3px 8px #000;
    font-size: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

interface TituloProps {
    titulo: string;
}

const Titulo: React.FC<TituloProps> = ({titulo}) => {
    return(
        <>
            <TituloStyled>{titulo}</TituloStyled>
        </>
    );
};

export default Titulo;