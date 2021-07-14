import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from 'formik';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

const Input:React.FC<InputProps> = ({ name, icon, ...rest }) => {
    const [ field, meta ] = useField('');
    const [ isFocused, setIsFocused ] = useState(false);
    const [ isFilled, setIsFilled ] = useState(false);
    
    const handleInputFocus = () => { 
        setIsFocused(true);
    }

    const handleInputBlur = () => { 
        setIsFocused(false);
        if(field.value){
            setIsFilled(true);
        }else {
            setIsFilled(false);
        }
    }
       
    console.log(field.value)
    console.log(isFocused)       
    console.log(isFilled)       

    return (
        <Container 
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        >
            <Icon name={icon} size={20} color={isFilled ? '#ff9000' : '#666360'}/>

            <TextInput   
                keyboardAppearance="dark" 
                placeholderTextColor="#666360"
                {...rest}
            />
        </Container>
    )
};

export default Input;