
import styled from "styled-components";

// Theme
export const MainContainer = styled.div`
background: radial-gradient(135% 250% at right, 	#E8E8E8 53%,  #6BEFA3 30%);
height: 100vh;
@media(max-width: 800px) {
  background: radial-gradient(275% 110% at bottom, 	#E8E8E8 53%,  #6BEFA3 30%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }

`


export const Footer = styled.div`
@media(max-width: 800px) {
  margin: auto;
  text-align: center;
  padding:30px;
  }
`

export const DivId = styled.div`
/* color:white; */
`

export const DivNumbers = styled.div`
  display:flex;
flex-direction: row;
@media(max-width: 800px) {
  height: 500px;
  padding:10px;
  display:flex;
flex-direction: row;
justify-content: space-around;
flex-wrap:  wrap;
  }

`

// Logo Mega Sena
export const LottoLogo = styled.div`
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

