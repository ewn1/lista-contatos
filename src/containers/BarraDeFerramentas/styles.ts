import styled from 'styled-components'

export const Titulo = styled.h1`
  font-family: 'Gelasio', serif;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;

  @media (max-width: 767px) {
    text-align: center;
  }
`

export const CampoBusca = styled.input`
  font-family: 'Roboto Mono', monospace;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 213px;
  margin-right: 16px;
`
