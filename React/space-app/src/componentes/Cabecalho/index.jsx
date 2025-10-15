import styled from "styled-components"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return(
        <HeaderEstilizado>
            <img src="public/imagens/logo.png" alt="Logo da Space App" />
        </HeaderEstilizado>
    )
}

export default Cabecalho