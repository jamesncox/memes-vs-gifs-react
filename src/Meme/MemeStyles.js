import styled from "styled-components"

const MemeCard = styled.div`
  background-color: black;
  border-radius: .25in;
  display: inline-block;
  margin: 10px;
  padding: 10px;
`

const MemeButton = styled.button`
  background-color: black;
  border-radius: .25in;
  color: white;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

const GameLinkCard = styled.div`
  background-color: rgba(0, 0, 0, 0.75) ;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 2.5in;
  height: 4in;
  border-radius: .25in;
  margin: 10px;
  display: inline-block;
  padding: 10px;
  display: inline-table;
`



export { MemeCard, MemeButton, GameLinkCard }