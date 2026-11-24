import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  fundo: '#ffffff',
  campo: '#fafafa',
  card: '#ffffff',
  texto: '#1a1414',
  suave: '#736868',
  borda: '#efe9e7',
  principal: '#e11d2e',
  principalEscura: '#b3121f',
  laranja: '#f97316',
  perigo: '#ea580c'
}

export const fontes = {
  titulo: "'Space Grotesk', sans-serif",
  texto: "'DM Sans', sans-serif"
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${fontes.texto};
    background-color: ${cores.fundo};
    color: ${cores.texto};
    -webkit-font-smoothing: antialiased;
  }

  button, input {
    font: inherit;
  }
`

export const Container = styled.main`
  max-width: 720px;
  margin: 0 auto;
  padding: 56px 20px 80px;
`

export const Titulo = styled.h1`
  font-family: ${fontes.titulo};
  letter-spacing: -1px;

  span {
    background: linear-gradient(90deg, ${cores.principal}, ${cores.laranja});
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  font-size: 40px;
  line-height: 1.1;
  margin-bottom: 8px;
`

export const Subtitulo = styled.p`
  color: ${cores.suave};
  margin-bottom: 32px;
`

export const Campo = styled.input`
  width: 100%;
  height: 46px;
  padding: 0 14px;
  border: 1px solid ${cores.borda};
  border-radius: 10px;
  background-color: ${cores.campo};
  color: ${cores.texto};
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${cores.principal};
    box-shadow: 0 0 0 3px rgba(225, 29, 46, 0.15);
  }
`

export const Botao = styled.button<{ $variante?: 'primario' | 'secundario' | 'perigo' }>`
  height: 42px;
  padding: 0 18px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  border: 1px solid
    ${({ $variante }) =>
      $variante === 'perigo' ? cores.perigo : $variante === 'secundario' ? cores.borda : cores.principal};
  background-color: ${({ $variante }) =>
    $variante === 'perigo' || $variante === 'secundario' ? 'transparent' : cores.principal};
  color: ${({ $variante }) =>
    $variante === 'perigo' ? cores.perigo : $variante === 'secundario' ? cores.texto : '#fff'};

  &:hover {
    background-color: ${({ $variante }) =>
      $variante === 'perigo' ? cores.perigo : $variante === 'secundario' ? cores.borda : cores.principalEscura};
    color: ${({ $variante }) => ($variante === 'secundario' ? cores.texto : '#fff')};
  }

  &:focus-visible {
    outline: 3px solid rgba(249, 115, 22, 0.45);
    outline-offset: 2px;
  }
`
