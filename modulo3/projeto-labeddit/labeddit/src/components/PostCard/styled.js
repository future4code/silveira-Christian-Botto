import styled from 'styled-components'

export const PostCardContainer = styled.div`
  width: 30vw;
  margin: 10px;
  border: 3mm ridge #f4c2c2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `

  export const PostCards = styled.div`
display: flex;
flex-direction: row;
`

  export const Button = styled.button`
  background:#E75480;
  border: 1px solid #FF4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}
hover, :active: {
  background-color: initial;
  background-position: 0 0;
  color: #FF4742;
}
active: {
  opacity: .5;
}

@media (min-width: 500px) {
    max-width: 70px;
}
`