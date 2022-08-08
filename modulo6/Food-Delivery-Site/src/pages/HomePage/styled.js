import styled from "styled-components";

export const MainContainer = styled.div`

`

export const CardRest = styled.div`
padding: 0 1rem;
margin-top: 0.5rem;
`

export const Input = styled.input`
 width: 100%;
 height: 1.5rem;
 padding: 1rem 0.503rem 1rem 1.063rem;
 border-radius: 2px;
 border: solid 1px gray;
`

export const Menu= styled.div`
height: 2.625rem;
display: flex;
align-items: center;
padding: 0 1rem 0 0 ;
width: 100%;
overflow-x: auto;
`

export const MenuItem = styled.button`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  background: transparent;
  border: none;
  outline: none;
  padding: 1rem;
  color: ${(p) => p.selected ? "red" : "black"};
`