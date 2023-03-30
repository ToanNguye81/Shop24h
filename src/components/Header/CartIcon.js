import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CartIcon() {
    const navigate = useNavigate()
    const { cart } = useSelector(reduxData => reduxData.cartReducers)
    const [count, setCount] = React.useState(cart.length);
    const onBtnCartClick = () => {
        navigate("/orders")
    }

    React.useEffect(() => {
        setCount(cart.length)
    }, [cart])

    return (
        <Box
            sx={{
                color: 'action.active',
                display: 'flex',
                flexDirection: 'column',
                pr: 1,
            }}
        >
            <div>
                <IconButton onClick={onBtnCartClick}>
                    <Tooltip title="Your's Cart">
                        <Badge color="secondary" badgeContent={count}>
                            <AddShoppingCartIcon sx={{ fontSize: 30, color: "#34495e" }} />
                        </Badge>
                    </Tooltip>
                </IconButton>
            </div>
        </Box>
    );
}