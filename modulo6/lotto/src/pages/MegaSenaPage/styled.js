
import styled from "styled-components";

// Theme
export const MainContainer = styled.div`
background-color: #6BEFA3;
`

export const Footer = styled.div`

`

export const DivId = styled.div`

`

export const DivNumbers = styled.div`

`

// Logo Mega Sena
export const LottoLogo = styled.div`
`
// Select Menu
export const DropDownButton = styled.select `
  background-color: #F5F5F5;
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
   width:200px; 
`
export const DropDownMenu = styled.div `
  display: none;
  position: absolute;
  background-color: #F5F5F5;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
    };
  a:hover {background-color: 		#D3D3D3};
`

export const DropDown = styled.div `
position: relative;
  display: inline-block;
  :hover ${DropDownMenu} {display: block;}
  :hover ${DropDownButton} {background-color: D3D3D3;}
`

// 
