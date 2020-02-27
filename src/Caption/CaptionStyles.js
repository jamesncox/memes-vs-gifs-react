import styled from 'styled-components'

const CaptionButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

const SelectButton = styled.button`
  border-radius: .10in;
  color: buttontext;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

const FormButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 15px;
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

const CaptionForm = styled.div`
  background-color: #32003bd2;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 2.5in;
  height: 2in;
  border-radius: .25in;
  margin: 10px;
  padding: 10px;
  display: inline-table;
`

export { CaptionButton, FormButton, CaptionCard, SelectButton, CaptionForm }