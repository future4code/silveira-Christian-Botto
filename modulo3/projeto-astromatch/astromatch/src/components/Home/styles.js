import styled from "styled-components"

export const CardContainer = styled.div `
    border: 1px solid gray;
    width: 400px;
    height: 600px;
    margin-bottom: 2vh;
    background: linear-gradient(#e66465, #9198e5);
`

export const CardButton = styled.button `
  background-color: #FFB6C1;
  border: solid;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`

export const CardMatch = styled.button `
  background-color: transparent;
  border:none;
  cursor: pointer;
`

export const FlexMatch = styled.div `
  flex-direction: row;
display: flex;
justify-content: space-between;
`

export const FlexText = styled.div `
  font-size: 30px;
    color: white;
    font-weight: bolder;   
    text-align: center;
    margin: 4px 2px;
    padding: 10px;
`

export const GifDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 20vh;
`