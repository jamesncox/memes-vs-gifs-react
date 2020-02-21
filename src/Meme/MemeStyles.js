import styled from 'styled-components'

const MemeCard = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: .25in;
  display: inline-block;
  margin: 10px;
  padding: 10px;
`

const MemeButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color: #F8F8FF;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

const SaveButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

export { MemeCard, MemeButton, SaveButton }