import styled from 'styled-components'

import { cores, fontes } from '../../styles'

export const Form = styled.form`
  background-color: ${cores.card};
  border: 1px solid ${cores.borda};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
  display: grid;
  gap: 14px;

  h2 {
    font-family: ${fontes.titulo};
    font-size: 20px;
  }
`

export const Linha = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Rotulo = styled.label`
  display: grid;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: ${cores.suave};
`

export const Erro = styled.p`
  font-size: 13px;
  color: ${cores.perigo};
`
