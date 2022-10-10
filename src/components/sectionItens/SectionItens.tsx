import SectionItensStyled from "./SectionItensStyled";

interface SectionItensProps {
    invertida?: boolean,
    imagemCarro: string,
    titulo: string,
    texto: string,
}

const SectionItens: React.FC<SectionItensProps> = ({invertida, imagemCarro, titulo, texto}) => {
    return(
        <SectionItensStyled style={
            invertida ? {flexDirection: 'row-reverse'} : {flexDirection: 'row'}
        }>
            <div className="texto">
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>
            <div>
                <img src={imagemCarro} />
            </div>
        </SectionItensStyled>
    )
}

export default SectionItens;