import styled from "styled-components";

export const MainContainer = styled.body`
font-family: 'Roboto', sans-serif;
display: flex;
flex-direction: row;
@media(max-width: 800px) {
  width:100vw;
  flex-direction: column;
  }
  `

export const RecAuxContainer = styled.div`
padding-bottom: 40px;
@media(max-width: 800px) {
    padding-left: 15px;   
    padding-bottom: 20px;
    }
` 

export const RecContainer = styled.div`
width: 60vw;
display: flex;
flex-direction: row;
overflow-x: auto;
height:455px;
column-gap: 10px;
@media(max-width: 800px) {
  width:100vw;
  }
` 

export const RecommendedContainer = styled.div`
p{
font-size: 30px;
padding-top: 20px;
font-weight: bold;
}
@media(max-width: 800px) {
    p{
        padding-left: 15px;
    }
    }
` 

export const ColumnOne = styled.div`
width:30vw;
padding-top: 20px;
padding-left: 40px;
img {
    width: 400px;
    height: 600px;
}
@media(max-width: 800px) {
    padding-top: 20px;
padding-left: 90px;
img {      
    height: 300px;
    width: 200px;
}
  }
`

export const ColumnTwo = styled.div`
width:50vw;
display: flex;
flex-direction: column;
padding-left: 30px;
@media(max-width: 800px) {
    padding-top: 0px;
padding-left: 0px;
margin: auto;
width: 100vw;
  }
`

export const DivTitle = styled.div`
p{
font-size: 30px;
font-weight: bold;
}
@media(max-width: 800px) {
    p{
        padding-left: 15px;
    }
    }
`

export const DivBio = styled.div`
@media(max-width: 800px) {
    padding-left: 15px;  
    padding-right: 10px; 
    }

`
