import styled from "styled-components"

export const MainContainer = styled.body`
font-family: 'Roboto', sans-serif;
`

// Filter Container

export const FilterContainer = styled.div`
background-image: linear-gradient(to right bottom, #5c16c5, #5014aa, #441190, #380f76, #2d0c5e);
height: 450px;
display: flex;
  flex-direction: column;
@media(max-width: 800px) {
    width: 100vw;
   height: 950px;
  }
`

export const ParPhrase = styled.p`
color:white;    
    font-size: 56px;
    padding:0px;
    text-align:center;
    margin: auto;
    padding-left: 325px; 
    padding-right: 325px;
    @media(max-width: 800px) {
        padding-left: 0px; 
    padding-right: 0px;
}
`

export const ParFilter = styled.p`
color:white;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding:0px;
    text-align:center;
    margin: auto;
    padding-left: 325px; 
    padding-right: 325px;
    @media(max-width: 800px) {
        padding-left: 0px; 
    padding-right: 0px;
}
`

export const FilterButtonContainer = styled.div`
width: 1000px;
display:flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
margin: auto;
@media(max-width: 800px) {
    width: 100vw;
}
`

// Pagination Container
export const PaginationContainer = styled.div`
width: 450px;
margin:auto;
display:flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
padding-top: 20px;
padding-left:300px;
padding-right:400px;
@media(max-width: 800px) {
    flex-direction: column;
    width: 100vw;
    padding-left: 0px; 
    padding-right: 0px;
    margin: auto;
    row-gap: 10px;
}
`

export const PaginationContainerAux = styled.div`
display:flex;
flex-direction: row;
@media(max-width: 800px) {
    margin: auto;
}`



// Movies Container

export const MovieContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: start;
flex-wrap: wrap;
padding-top: 30px;
padding-left:120px;
padding-right:120px;
row-gap: 30px;
column-gap:40px;
@media(max-width: 800px) {
        padding-left: 90px; 
    padding-right: 0px;
}
`


