import styled from 'styled-components'

export const Titulo = styled.h1`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 32px;
  font-family: 'Gelasio', serif;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`

export const Form = styled.form`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-weight: bold;
  color: #666;
  width: 100%;
  font-family: 'Roboto Mono', monospace;
`

export const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

export const BotaoVoltar = styled.button`
  font-family: 'Roboto Mono', monospace;
  background-color: #67568c;
  font-size: 14px;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9166ee;
  }
`
