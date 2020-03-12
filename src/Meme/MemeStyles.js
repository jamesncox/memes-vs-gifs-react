import styled from 'styled-components'

const MemeCard = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: .25in;
  display: inline-block;
  margin: 15px;
  padding: 10px;
`

const MemeButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color: #F8F8FF;
  font-size: 18px;
  margin-right: 15px;
  maring-left: 15px;
  font-family: Helvetica, sans-serif;
`

const SaveButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
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

const NewMemeForm = styled.div`
background: rgb(43,0,69);
background: linear-gradient(142deg, rgba(43,0,69,0.9023984593837535) 27%, rgba(0,0,0,.9) 100%);
  color: white;
  text-shadow: 1px 1px 1px #000000;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 2.5in;
  height: 1in;
  border-radius: .25in;
  border-style: solid;
  border-color: black;
  margin: 10px;
  padding: 10px;
  display: inline-table;
`

const CloseButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

export { MemeCard, MemeButton, SaveButton, LoginCard, CloseButton, NewMemeForm }