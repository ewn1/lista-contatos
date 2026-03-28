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
  padding: 50px 0;
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

export default GlobalStyle
