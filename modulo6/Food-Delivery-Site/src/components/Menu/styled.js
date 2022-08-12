import styled from "styled-components";

import { mainColor } from "../../constants/colors";

import { ReactComponent as Home } from "../../assets/home.svg"
import { ReactComponent as Cart } from  "../../assets/cart.svg"
import { ReactComponent as Avatar } from "../../assets/avatar.svg"

export const MainContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
justify-items: center;
height: 3.062rem;
box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
position: fixed;
bottom: 0;
width: 100%;
background-color: white;
z-index: 1;
`

export const MenuSpacer = styled.div`
height: 8.062rem;
`


export const AvatarStyled = styled(Avatar)`
fill: ${(p) => p.pageCurrent ?`${mainColor}`: "B8B8B8"};
`

export const CartStyled = styled(Cart)`
fill: ${(p) => p.pageCurrent ? `${mainColor}`: "B8B8B8"};
`

export const HomeStyled = styled(Home)`
fill: ${(p) => p.pageCurrent ? `${mainColor}` : "B8B8B8"};
`