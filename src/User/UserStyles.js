import styled from 'styled-components'

const ThumbnailCard = styled.div`
  background-color: rgba(0, 0, 0, 0.90) ;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 1in;
  height: .5in;
  border-radius: .25in;
  margin: 10px;
  display: inline-block;
  padding: 10px;
  display: inline-table;
`
const PopupCard = styled.div`
  background-color: rgba(0, 0, 0, 0.90);
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 1in;
  height: .1in;
  border-radius: .25in;
  border: solid;
  border-color: rgb(121, 121, 121);
  margin: 10px;
  display: inline-block;
  padding: 10px;
  display: inline-table;
`

const LoginCard = styled.div`
  background-color: rgba(0, 0, 0, 0.90) ;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 5in;
  height: 1in;
  border-radius: .25in;
  margin: 10px;
  display: inline-block;
  padding: 10px;
  display: inline-table;
`

const SignupCard = styled.div`
  background-color: #32003bd2;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 5in;
  height: 3in;
  border-radius: .25in;
  margin: 10px;
  display: inline-block;
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
  margin: 10px;
  display: inline-block;
  padding: 30px;
  display: inline-table;
`

const CloseButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`
export { ThumbnailCard, PopupCard, LoginCard, SignupCard, ErrorCard, CloseButton }