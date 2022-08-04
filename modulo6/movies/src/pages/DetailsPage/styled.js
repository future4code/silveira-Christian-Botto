import styled from "styled-components";

export const MainContainer = styled.body`
font-family: 'Roboto', sans-serif;
@media(max-width: 800px) {
  width:100vw
  }
`

export const Firstontainer = styled.div`
background-image: linear-gradient(to right bottom, #5c16c5, #5014aa, #441190, #380f76, #2d0c5e);
height: 450px;
display: flex;
flex-direction: row;
justify-content: 	flex-start;
color: white;
@media(max-width: 800px) {
  flex-direction: column;
  height: 1250px;
  margin:auto;
  }
`

export const ColumnOne = styled.div`
padding-top: 40px;
padding-left: 80px;
@media(max-width: 800px) {
    padding-top: 0px;
padding-left: 0px;
margin: auto;
  }
`

export const ColumnTwo = styled.div`
display: flex;
flex-direction: column;
padding-top: 30px;
padding-left: 30px;
@media(max-width: 800px) {
    padding-top: 0px;
padding-left: 0px;
margin: auto;
width: 100vw;
  }
`
export const DivScore = styled.div `
display: flex;
flex-direction: column;
@media(max-width: 800px) {
/* margin: auto; */
padding-left: 15px;  
  }
`

export const DivOverview= styled.div `
display: flex;
flex-direction: column;
@media(max-width: 800px) {
    padding-left: 15px;  
    padding-right: 10px; 
  }
`

export const DivScoreOverview = styled.div `
display: flex;
flex-direction: row;
column-gap:20px;
width: 1300px;
@media(max-width: 800px) {
    flex-direction: column;
    width:100vw;      
    }
`

export const DivTextOverview = styled.div`
font-size: 20px;
font-weight: 300;
`

export const IMG = styled.img`
width: 300px;
`

export const DivInfo = styled.h5`
display: flex;
flex-direction: row;
align-items: center;
@media(max-width: 800px) {
    flex-wrap: wrap;    
    padding-left: 15px;
    padding-right: 15px;;    
    }
`

export const DivTitle = styled.h2`
font-weight: bold;
@media(max-width: 800px) {
    padding-left: 15px;
    padding-right: 15px;;    
    }
`

export const OriginalCastContainer = styled.div`
p{
font-size: 30px;
padding-left: 80px;
padding-top: 30px;
font-weight: bold;
}
@media(max-width: 800px) {
    p{
        padding-left: 30px;   
    }
    }
` 

export const DivCrew = styled.div`
display: flex;
flex-direction: row;
width: 700px;
height: 80px;
padding-top: 20px;
column-gap: 30px;
@media(max-width: 800px) { 
    width:100vw;  
    }
`
export const DivDirector = styled.div`
display: flex;
flex-direction: column;
`
export const DivDir = styled.div`
font-weight: 300;
`

export const DivDirTitle = styled.div`
font-weight: 500;
`

export const DivExec = styled.div`
display: flex;
flex-direction: column;
`

export const CastAuxContainer = styled.div`
padding-left: 80px;
@media(max-width: 800px) {
    padding-left: 30px;   
    }
` 

export const CastContainer = styled.div`
width: 85vw;
display: flex;
flex-direction: row;
overflow-x: auto;
overflow-clip-margin: 20px;

` 

export const TrailerContainer = styled.div`
p{
font-size: 30px;
padding-left: 80px;
padding-top: 20px;
font-weight: bold;
@media(max-width: 800px) {
    padding-left: 30px;   
    }
}
` 

export const VideoContainer = styled.div`

`

export const RecommendedContainer = styled.div`
p{
font-size: 30px;
padding-left: 80px;
padding-top: 20px;
font-weight: bold;
}
@media(max-width: 800px) {
    p{
        padding-left: 15px;
    }
    }
` 

export const RecAuxContainer = styled.div`
padding-left: 80px;
padding-bottom: 40px;
@media(max-width: 800px) {
    padding-left: 30px;   
    padding-bottom: 20px;
    }
` 

export const RecContainer = styled.div`
width: 85vw;
display: flex;
flex-direction: row;
overflow-x: auto;
overflow-clip-margin: 20px;
height:450px;
column-gap: 10px;
` 