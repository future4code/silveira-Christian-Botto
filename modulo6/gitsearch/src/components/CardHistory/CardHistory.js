import { MainContainer } from "./styled"

// Redux
import { useDispatch} from "react-redux";
import { setModalTrue } from "../../redux/modalSlice";


const CardHistory = (props) => {
    return(
        <MainContainer onClick ={ useDispatch(setModalTrue())}>
            {/* <a href={props.url} target="_blank" >{props.name}  </a>^ */}
            {props.name}
        </MainContainer>
    )
}

export default CardHistory