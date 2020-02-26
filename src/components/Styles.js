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
  width: 2.5in;
  height: 4in;
  border-radius: .25in;
  margin: 10px;
  display: inline-block;
  padding: 10px;
  display: inline-table;
`

const SavedGifCard = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
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

const DisplayGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    padding: 10px;
`

export { GameLinkCard, SavedMemeCard, SavedGifCard, DisplayGrid }