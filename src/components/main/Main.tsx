import img1 from '../../assets/carro1.jpg'
import img2 from '../../assets/carro2.jpg'
import img3 from '../../assets/carro3.jpg'
import SectionItens from '../sectionItens/SectionItens'

const Main: React.FC = () => {
    return(
        <>
            <SectionItens imagemCarro={img1} titulo="Seção 1" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt velit mollitia. Accusamus magni inventore eius est accusantium dolores id tenetur officia at facere, amet suscipit nihil voluptatum, quidem ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt velit mollitia. Accusamus magni inventore eius est accusantium dolores id tenetur officia at facere, amet suscipit nihil voluptatum, quidem ex!" />

            <SectionItens invertida imagemCarro={img2} titulo="Seção 2" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt velit mollitia. Accusamus magni inventore eius est accusantium dolores id tenetur officia at facere, amet suscipit nihil voluptatum, quidem ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt velit mollitia. Accusamus magni inventore eius est accusantium dolores id tenetur officia at facere, amet suscipit nihil voluptatum, quidem ex!" />

            <SectionItens imagemCarro={img3} titulo="Seção 3" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt velit mollitia. Accusamus magni inventore eius est accusantium dolores id tenetur officia at facere, amet suscipit nihil voluptatum, quidem ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt velit mollitia. Accusamus magni inventore eius est accusantium dolores id tenetur officia at facere, amet suscipit nihil voluptatum, quidem ex!" />
        
        </>
    )
}

export default Main;