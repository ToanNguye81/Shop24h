import * as React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateQuantity } from '../../actions/cart.actions';

const MyTextBox = styled.input`
height:45px;
width:45px;
color:#555555 ;
border:none;
border-top:0.1px solid #E6E6E6;
border-bottom:0.1px solid #E6E6E6;
background-color:#F0F0F0;
text-align:center;
font-family: "Poppins";
`

export const QuantityBox = ({ initQuantity, productId }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = React.useState(initQuantity)

    React.useEffect(() => {
        setQuantity(initQuantity)
    }, [initQuantity, productId])

    const handleQuantityChange = (value) => {
        if (value === '') {
            setQuantity('');
        }
        if (/^[1-9][0-9]*$/.test(value)) {
            setQuantity(value)
            dispatch(updateQuantity(productId, value));
        }
    }

    return (
        <MyTextBox
            variant="outlined"
            size="small"
            value={quantity || ""}
            onChange={(event) => handleQuantityChange(event.target.value)}
        />
    )
}