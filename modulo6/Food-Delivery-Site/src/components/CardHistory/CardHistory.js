
// Styles
import { MainContainer, DivTitle , DivDate, DivTotal } from "./styled"


// App
const CardHistory = (props) => {

     // Functions

     const convertDate = (timestamp) => {
        let time = new Date (timestamp)
        let DD = time.getDate().toString().padStart(2,'0')
        let MM = (time.getMonth()+1).toString().padStart(2,'0')
        let YYYY = time.getFullYear()

        return `${DD}/${MM}/${YYYY}`
    } 
    return (
        <MainContainer >           
            <DivTitle>{props.restaurantName}</DivTitle>
            <DivDate>{convertDate(props.createdAt)}</DivDate>
            <DivTotal>${props.totalPrice}</DivTotal>           
        </MainContainer>
    )
}

export default CardHistory