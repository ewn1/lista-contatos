import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
  }
`

export const MainContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 75px 0;
`

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
  padding: 20px 0;
  z-index: 10;
  display: flex;
  justify-content: center;
`

export const Header = styled.header`
  padding: 24px;
  background-color: #fcfcfc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

export const BotaoAdicionar = styled.button`
  font-family: 'Roboto Mono', monospace;
  background-color: #4caf50;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #22ca5d;
  }
`

export const BotãoConfirmar = styled.button`
  font-family: 'Roboto Mono', monospace;
  background-color: #4caf50;
  color: #fff;
  padding: 8px 12px;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #22ca5d;
  }
`

export const BotaoCancelar = styled.button`
  font-family: 'Roboto Mono', monospace;
  background-color: #ff6e6c;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff435c;
  }
`

export default GlobalStyle
