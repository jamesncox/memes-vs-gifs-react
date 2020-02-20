import styled from 'styled-components'

const MemeCard = styled.div`
  background-color: rgba(0, 0, 0, 0.90);
  border-radius: .25in;
  display: inline-block;
  margin: 10px;
  padding: 10px;
`

const MemeButton = styled.button`
  border-radius: .25in;
  color: buttontext;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

export { MemeCard, MemeButton }