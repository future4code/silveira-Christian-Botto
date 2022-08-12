import  React, { useState } from 'react';
import Modal from '@mui/material/Modal';

import { BoxStyled, Title, Select, Button } from './styled';

const ModalStyled = ({ open, setOpen, chooseQuantity }) => {

    const[quantity, setQuantity] = useState(1)


    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            BackdropProps={{
                timeout: 500,
            }}
        >
            <BoxStyled >
                <Title>How many do you want?</Title>
                <Select onChange={(e) => setQuantity(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </Select>
                <Button onClick={() => chooseQuantity(Number(quantity))}>add to cart</Button>
            </BoxStyled>
        </Modal>
    );
}

export default ModalStyled