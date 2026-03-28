import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-top: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 4px;

    li:first-child {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 4px;
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
