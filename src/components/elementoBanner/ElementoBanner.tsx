import React from "react";
import ElementoBannerStyled from "./ElementoBannerStyled"

interface ElementoBannerProps {
    icone: React.ReactNode,
    titulo: string,
    p: string,
}

const ElementoBanner: React.FC<ElementoBannerProps> = ({ icone, titulo, p }) => {
    return(
        <ElementoBannerStyled>
            {icone}
            <h3>{titulo}</h3>
            <p>{p}</p>
        </ElementoBannerStyled>
    )
}

export default ElementoBanner;