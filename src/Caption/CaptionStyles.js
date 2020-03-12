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
  background-color: #41004dd2;
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
  background: rgb(43,0,69);
  background: linear-gradient(308deg, rgba(43,0,69,0.9023984593837535) 27%, rgba(0,0,0,0.908000700280112) 100%);
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 2.5in;
  height: 2in;
  border-radius: .25in;
  border-style: solid;
  border-color: black;
  margin: 10px;
  padding: 10px;
  display: inline-table;
`

const ErrorCard = styled.div`
  background-color: rgba(199, 0, 0, 0.815);
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 4in;
  height: 1in;
  border-radius: .25in;
  margin: 5px;
  display: inline-block;
  padding: 15px;
  display: inline-table;
`

const CloseButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

export { CaptionButton, FormButton, CaptionCard, SelectButton, CaptionForm, ErrorCard, CloseButton }