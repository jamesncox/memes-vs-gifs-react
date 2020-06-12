import styled from 'styled-components'

const GiphyCard = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: .25in;
  display: inline-block;
  margin: 10px;
  padding: 10px;
`

const NextBtn = styled.button`
  color: buttontext;
  border-radius: .10in;
  color: black;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
  outline-style: none;
`

const MyForm = styled.form`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

const SaveButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
  outline-style: none;
`
const LoginCard = styled.div`
  background-color: rgba(0, 0, 0, 0.90) ;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 1in;
  height: 1in;
  border-radius: .25in;
  margin: 10px;
  display: inline-block;
  padding: 10px;
  display: inline-table;
`

const CloseButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
  outline-style: none;
`


export { GiphyCard, NextBtn, MyForm, SaveButton, LoginCard, CloseButton }
