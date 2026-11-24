import styled from 'styled-components'

import { cores, fontes } from '../../styles'

export const Card = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;
  background-color: ${cores.card};
  border: 1px solid ${cores.borda};
  border-radius: 14px;
  padding: 18px 20px;

  @media (max-width: 600px) {
    grid-template-columns: auto 1fr;
  }
`

export const Avatar = styled.span`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: ${fontes.titulo};
  font-weight: 700;
  color: ${cores.principal};
  background-color: rgba(91, 61, 245, 0.1);
`

export const Info = styled.div`
  min-width: 0;

  h3 {
    font-family: ${fontes.titulo};
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  p {
    font-size: 14px;
    color: ${cores.suave};
    overflow-wrap: anywhere;
  }
`

export const Acoes = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 600px) {
    grid-column: 1 / -1;
  }
`

export const Edicao = styled.form`
  grid-column: 1 / -1;
  display: grid;
  gap: 10px;
`
