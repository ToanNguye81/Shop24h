import React, { useState, useRef } from 'react';
import { TextField, IconButton, List, ListItem, ListItemText, Card } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

const ExtendCard = styled(Card)(() => ({
    border: "none",
    '&:hover': {
      border: "2px solid orange",
    },
  }));

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    const handleInputValueChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        setMessages([...messages, { text: inputValue, sender: 'user' }]);
        setInputValue('');
        // Call Dialogflow API here to get the response
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) { // Enter key pressed
            handleSubmit();
        }
    };

    return (
        <ExtendCard variant='none'>
            <div>
                <List>
                    {messages.map((message, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={message.text} align={message.sender} />
                        </ListItem>
                    ))}
                </List>
                <div>
                    <TextField
                        inputRef={inputRef}
                        value={inputValue}
                        onChange={handleInputValueChange}
                        onKeyDown={handleKeyDown}
                        label="Type your message here"
                        variant="outlined"
                        fullWidth
                    />
                    <IconButton onClick={handleSubmit}>
                        <SendIcon />
                    </IconButton>
                </div>
            </div>
        </ExtendCard>

    );
};

export default Chatbot;
