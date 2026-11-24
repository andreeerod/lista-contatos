import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Contato from './components/Contato'
import Formulario from './components/Formulario'
import type { RootState } from './store'
import { Container, cores, GlobalStyle, Subtitulo, Titulo } from './styles'

const Lista = styled.ul`
  display: grid;
  gap: 12px;
`

const Vazio = styled.p`
  text-align: center;
  padding: 40px 20px;
  color: ${cores.suave};
  border: 1px dashed ${cores.borda};
  border-radius: 14px;
`

function App() {
  const contatos = useSelector((state: RootState) => state.contatos.itens)

  return (
    <>
      <GlobalStyle />
      <Container>
        <Titulo>
          Meus <span>contatos</span>
        </Titulo>
        <Subtitulo>
          {contatos.length === 1 ? '1 contato salvo' : `${contatos.length} contatos salvos`}
        </Subtitulo>
        <Formulario />
        {contatos.length === 0 ? (
          <Vazio>Nenhum contato ainda. Adicione o primeiro acima.</Vazio>
        ) : (
          <Lista>
            {contatos.map((c) => (
              <Contato key={c.id} contato={c} />
            ))}
          </Lista>
        )}
      </Container>
    </>
  )
}

export default App
