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

const SavedMemeCard = styled.div`
  background-color: rgba(0, 0, 0, 0.95) ;
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

const SavedGifCard = styled.div`
  background-color: rgba(0, 0, 0, 0.90);
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

const FilterButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`

const ModalCaptionCard = styled.div`
background-color: rgba(0, 0, 0, 0.95) ;
  color: white;
  border: 3px solid white;
  font-family: Helvetica, sans-serif;
  font-size: 25px;
  width: 3in;
  height: 1in;
  border-radius: .25in;
  margin: auto;
  display: inline-block;
  padding: 10px;
  display: inline-table;
`


export { GameLinkCard, SavedMemeCard, SavedGifCard, FilterButton, ModalCaptionCard }