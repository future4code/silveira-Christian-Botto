import styled from "styled-components"

export const CardContainer = styled.div `
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 2vh;
    /* margin: auto;
    padding-top: 2vh; */
`

export const CardHeader = styled.div `
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`

export const CardtFooter = styled.div `
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`

export const UserPhoto = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

export const CardPhoto = styled.img`
    width: 100%;
`

export const CommentContainer = styled.div`
    margin-left: 10px;
`