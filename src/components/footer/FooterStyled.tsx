import styled from "styled-components";

const FooterStyled = styled.section `
    display: flex;
    justify-content: space-between;
    padding: 80px;
    ul{
        display: flex;
        li{
            list-style: none;
        }
    }

    nav>ul>li{
        padding: 0 15px 10px 0;
        font-size: 1.2rem;
        font-weight: bold;
        color: #2c4276
    }

    div>ul>li {
        margin: 0 15px;
        color: #2c4276;
    }
`;

export default FooterStyled;