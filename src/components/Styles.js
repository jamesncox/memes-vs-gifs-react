import styled from 'styled-components'

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

const FilterButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 18px;
  font-family: Helvetica, sans-serif;
`

const LogOutButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
  position: relative;
`

export { GameLinkCard, ThumbnailCard, PopupCard, FilterButton, LogOutButton }