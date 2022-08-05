import { MainContainer, Button, DivName, DivButton } from "./styled"

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setModalTrue } from "../../redux/modalSlice";
import { removeFromHistory } from "../../redux/historySlice";
import { setUserHist} from "../../redux/userSlice";





const CardHistory = (props) => {

    const dispatch = useDispatch()

    const functions = (name) => {
        dispatch(setUserHist(name))
        dispatch(setModalTrue())
    }

    return (
        <MainContainer >
            <DivName>
                {props.name}
            </DivName>

            <DivButton>
             <Button onClick={() => functions(props.name)}>+</Button>
            <Button onClick={() => dispatch(removeFromHistory(props.id))}>x</Button>
            </DivButton>

            

        </MainContainer>
    )
}

export default CardHistory