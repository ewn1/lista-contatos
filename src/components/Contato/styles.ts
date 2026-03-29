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
`
