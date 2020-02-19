import styled from 'styled-components'

const CaptionButton = styled.button`
   color: buttontext;
  border-radius: .10in;
  color: black;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

const SelectButton = styled.button`
  background-color: #000308d2;
  border-radius: .10in;
  color: white;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

const CaptionCard = styled.div`
  background-color: #32003bd2;
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

export { CaptionButton, CaptionCard, SelectButton }