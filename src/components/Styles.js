import styled from 'styled-components'

const GameLinkCard = styled.div`
  background-color: rgba(0, 0, 0, 0.75) ;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 2.5in;
  height: 4in;
  border-radius: .25in;
  margin: 25px;
  display: inline-block;
  padding: 10px;
  display: inline-table;
`

const ThumbnailCard = styled.div`
  background-color: rgba(0, 0, 0, 0.90) ;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 1rem;
  height: .5rem;
  border-radius: 1rem;
  margin: .5rem;
  padding: 8px;
  display: inline-table;
  @media (max-width: 450px) {
    margin: 3px;
    padding: 5px;
    border-radius: .15in;
  }
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
  padding: 10px;
  display: inline-table;
`

const FilterButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.00);
  color:  #F8F8FF;
  font-size: 18px;
  font-family: Helvetica, sans-serif;
  outline-style: none;
`

const LogOutButton = styled.button`
  border-radius: .10in;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
  position: relative;
  outline-style: none;
`

const AboutCard = styled.div`
  background-color: rgba(0, 0, 0, 0.80) ;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 90%;
  height: 5in;
  border-radius: .1in;
  margin: 25px;
  display: inline-block;
  padding: 10px;
  border: solid rgb(121, 121, 121) 10px;
  display: inline-table;
`

const GuidelineCard = styled.div`
  background-color: rgba(0, 0, 0, 0.25) ;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  border: solid rgb(121, 121, 121) 5px;
  width: 90%;
  height: 3in;
  text-align: left;
  border-radius: .1in;
  margin: 25px;
  display: inline-block;
  padding: 20px;
  display: inline-table;
`

export { GameLinkCard, ThumbnailCard, PopupCard, FilterButton, LogOutButton, AboutCard, GuidelineCard }