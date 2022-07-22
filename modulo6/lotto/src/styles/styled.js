
import styled from "styled-components";

// Theme
export const MainContainerMegaSena = styled.div`
background: radial-gradient(125% 250% at right, 	#E8E8E8 53%,  #6BEFA3 30%);
height: 100vh;
display: flex;
  flex-direction: row;
@media(max-width: 800px) {
  background: radial-gradient(275% 90% at bottom, 	#E8E8E8 53%,  #6BEFA3 30%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
  font-family: 'Montserrat', sans-serif;
`

export const MainContainerQuina = styled.div`
background: radial-gradient(125% 250% at right, 	#E8E8E8 53%,  #8666EF 30%);
height: 100vh;
display: flex;
  flex-direction: row;
@media(max-width: 800px) {
  background: radial-gradient(275% 90% at bottom, 	#E8E8E8 53%,  #8666EF 30%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
  font-family: 'Montserrat', sans-serif;
`

export const MainContainerLotoFacil = styled.div`
background: radial-gradient(125% 250% at right, 	#E8E8E8 53%,  #DD7AC6 30%);
height: 100vh;
display: flex;
  flex-direction: row;
@media(max-width: 800px) {
  background: radial-gradient(275% 90% at bottom, 	#E8E8E8 53%,  #DD7AC6 30%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
  font-family: 'Montserrat', sans-serif;
`

export const MainContainerLotoMania = styled.div`
background: radial-gradient(125% 250% at right, 	#E8E8E8 53%,  #FFAB64 30%);
height: 100vh;
display: flex;
  flex-direction: row;
@media(max-width: 800px) {
  background: radial-gradient(275% 90% at bottom, 	#E8E8E8 53%,  #FFAB64 30%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
  font-family: 'Montserrat', sans-serif;
`

export const MainContainerTimeMania = styled.div`
background: radial-gradient(125% 250% at right, 	#E8E8E8 53%,  #5AAD7D 30%);
height: 100vh;
display: flex;
  flex-direction: row;
@media(max-width: 800px) {
  background: radial-gradient(275% 90% at bottom, 	#E8E8E8 53%,  #5AAD7D 30%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
  font-family: 'Montserrat', sans-serif;
`

export const MainContainerDiaDeSorte = styled.div`
background: radial-gradient(125% 250% at right, 	#E8E8E8 53%,  #BFAF83 30%);
height: 100vh;
display: flex;
  flex-direction: row;
@media(max-width: 800px) {
  background: radial-gradient(275% 90% at bottom, 	#E8E8E8 53%,  #BFAF83 30%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
  font-family: 'Montserrat', sans-serif;
`

////////////////


export const DivRest = styled.div`
/* color:white; */
@media(max-width: 800px) {
  display:flex;
  flex-direction: column;
  padding-top:20px;
padding-left:0px;
  }
`


export const DivId = styled.div`
color:white;
padding-top:200px;
padding-left:96px;
@media(max-width: 800px) {
  flex-direction: column;
  padding-top:10px;
padding-left:0px;
text-align: center;
  }
`



// Logo Mega Sena
export const LottoLogo = styled.div`
padding-top:200px;
padding-left:86px;
display:flex;
@media(max-width: 800px) {
  flex-direction: column;
  padding-top:10px;
padding-left:0px;
text-align: center;
  }
`

export const LottoLogoLogo = styled.div`
  img {
  height: 63px;
  width:63px;
  }
`

export const LottoLogoName = styled.div`
padding-top: 20px;
padding-left: 20px;
color:white;
font-weight:bold;
font-size: 25px;
`


// Select Menu
export const DropDownButton = styled.select`
  background-color: #F5F5F5;
  color: black;
  font-size: 15px;
  border: none;
  cursor: pointer;
  width: 215px;
  height: 45.2px;
  border-radius: 10px;   
  text-align: center;  
  @media(max-width: 800px) {
  width: 233px;
  height: 51px;
  }
`
export const DropDownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #F5F5F5;
  width: 215px;
  text-align: center;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: :center;
    };
  a:hover {background-color: 		#D3D3D3};
  @media(max-width: 800px) {
  width: 233px;
  height: 220px;
  }
`

export const DropDown = styled.div`
position: relative;
width: 215px;
height: 45.2px;
padding-top:50px;
padding-left:96px;
  display: inline-block;
  :hover ${DropDownMenu} {display: block;}
  :hover ${DropDownButton} {background-color: D3D3D3;}
  @media(max-width: 800px) {
  margin:auto;
  padding:30px;
  width: 233px;
  height: 51px;
  }
`
// Number Footer

export const DivNumberFooter = styled.div`
`

export const Footer = styled.div`
padding-left:250px; 
 padding-top:200px;
/* position: fixed;
  bottom: 0;
  right: 0; */
@media(max-width: 800px) {
  margin: auto;
  text-align: center;
  padding-left:0px;
  padding-top:30px
  }
`
export const DivNumbers = styled.div`
display:flex;
flex-direction: row;
padding-left:240px;
padding-top: 260px;
flex-wrap: wrap;
@media(max-width: 800px) {
padding-left:0px;
padding-top: 0px;
justify-content: center;
  }

`