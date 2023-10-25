import styled from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 0;
  max-width: 100%;
  width: ${props => props.$expandida ? "90%" : "460px"};
  & > img{
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption{
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    box-sizing: border-box;
    color: white;
    padding: 12px;

    h3{
      font-family: 'GandhiSansBold';
    } 
    h4{
      flex-grow: 1;
    }
    h3, h4 {
      margin: 0;
      font-size: 16px;
    }

  }
`
const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Imagem = ({ foto, expandida = false, aoZoomSolicidado, aoAlternarFavorito}) => {
  const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png"

  return (
    <Figure $expandida={expandida} key={foto.id}>
      <img src={foto.path} alt="" />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <h4>{foto.fonte}</h4>
          <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
            <img src={iconeFavorito} />
          </BotaoIcone>
          {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicidado(foto)}>
                    <img src="/icones/expandir.png" alt="Icone de expandir" />
                </BotaoIcone>}
        </Rodape>
      </figcaption>
    </Figure>
  )
}

export default Imagem