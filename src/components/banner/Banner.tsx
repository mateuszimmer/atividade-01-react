import ElementoBanner from "../elementoBanner/ElementoBanner";
import BannerStyled from "./BannerStyled";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import CarRentalIcon from '@mui/icons-material/CarRental';

const Banner = () => {
    return(
        <BannerStyled>
            <ElementoBanner icone={<DirectionsCarIcon fontSize="large" />} titulo="Primeiro item do banner" p="Este é o texto do primeiro item do banner" />
            <ElementoBanner icone={<ElectricCarIcon fontSize="large" />} titulo="Segundo item do banner" p="Este é o texto do segundo item do banner" />
            <ElementoBanner icone={<CarRentalIcon fontSize="large" />} titulo="Terceiro item do banner" p="Este é o texto do terceiro item do banner" />
        </BannerStyled>
    )
}

export default Banner;