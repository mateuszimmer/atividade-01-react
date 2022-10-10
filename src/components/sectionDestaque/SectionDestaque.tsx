import React from "react";
import Titulo from "../titulo/Titulo";
import SectionDestaqueStyled from "./SectionDestaqueStyled"
import LocalSwitch from "../localSwitch/LocalSwitch";
import LocalSwitchVisivel from "../localSwitch/LocalSwitchVisivel";

interface Props {
    children?: React.ReactNode;
    titulo: string;
}

const SectionDestaque: React.FC<Props> = ({titulo}) => {
    return(
        <>
            <SectionDestaqueStyled>
                <LocalSwitch>
                    <LocalSwitchVisivel />
                </LocalSwitch>
                <Titulo titulo={titulo}></Titulo>
            </SectionDestaqueStyled>
        </>
    )
}

export default SectionDestaque;