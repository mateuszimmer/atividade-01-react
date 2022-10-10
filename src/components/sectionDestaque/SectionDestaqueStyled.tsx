import styled from "styled-components";
import { parentPort } from "worker_threads";
import imagem from "../../assets/estrada.jpeg"

const SectionDestaqueStyled = styled.section `
    background-image: url(${imagem});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    height: 50vh;
    width: 100%;
    position: relative;
`

export default SectionDestaqueStyled;