import FooterStyled from "./FooterStyled";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer: React.FC = () => {
    return(
        <FooterStyled>
            <div>
                <nav>
                    <ul>
                        <li>Sobre</li>
                        <li>Contate-nos</li>
                        <li>Termos de Uso</li>
                        <li>Políticas de Privacidade</li>
                    </ul>
                </nav>
                <p>© Nesta Longa Estrada Da Vida. 2022. All Rights Reserved</p>
            </div>
            <div>
                <ul>
                    <li><FacebookIcon fontSize="large"/></li>
                    <li><TwitterIcon fontSize="large" /></li>
                    <li><InstagramIcon fontSize="large" /></li>
                </ul>
            </div>
        </FooterStyled>
    );
};

export default Footer;