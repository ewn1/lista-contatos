import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 8px;
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  gap: 8px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 4px;

    li:first-child {
      font-family: 'Roboto Mono';
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 4px;
    }

    li:not(:first-child) {
      font-family: 'Gelasio';
      font-size: 16px;
    }
  }

  div {
    border-top: 1px solid #eee;
    padding-top: 12px;
    margin-top: 8px;
    display: flex;
    gap: 8px;
  }

  @media (max-width: 767px) {
    margin: 16px 8px;
  }
`

export const BotaoEditar = styled.button`
  font-family: 'Roboto Mono';
  background-color: #ff6e6c;
  color: #fff;
  font-size: 12px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff435c;
  }
`

export const BotaoExcluir = styled.button`
  font-family: 'Roboto Mono';
  background-color: #67568c;
  color: #fff;
  font-size: 12px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9166ee;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
`

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;

  h3 {
    margin-bottom: 16px;
    font-family: 'Gelasio', serif;
  }

  p {
    margin-bottom: 24px;
    color: #666;
  }
`

export const nomeDoContato = styled.p`
  font-family: 'Gelasio', serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const CampoEdit = styled.input`
  font-family: 'Roboto Mono', monospace;
  padding: 4px 6px;
  border-radius: 8px;
  border: 1px solid #ccc;
`
