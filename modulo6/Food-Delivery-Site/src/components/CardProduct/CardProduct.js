
// Styles
import {
    MainContainer, IMG, BoxInfo, Info, Name,
    NameQuantity, Quantity, PriceButton, Button, Price
} from "./styled"

// App
const CardProduct = ({ product }) => {
    return (
        <MainContainer>
            <IMG src={product.photoUrl} />
            <BoxInfo>
                <NameQuantity>
                    <Name>{product.name} </Name>
                </NameQuantity>
                    <Info>{product.description}</Info>
                <PriceButton>
                    <Price>
                        ${product.price}
                    </Price>
                    <Button>
                        Add to cart
                    </Button>
                </PriceButton>
            </BoxInfo>
        </MainContainer>
    )
}

export default CardProduct