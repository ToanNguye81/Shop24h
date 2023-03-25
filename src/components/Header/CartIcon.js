import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CartIcon() {
    const [count, setCount] = React.useState(0);
    const navigate=useNavigate()
    const onBtnCartClick = () => {
        navigate("/orders")
    }

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