import React from 'react';
// import { RectButtonProperties } from 'react-native-gesture-handler';
import { ButtonProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface Button extends ButtonProps {
    title: string;
}

const Button:React.FC <Button> = ({...rest }:any) => {
    return (
        <Container {...rest}>
            <ButtonText>entrar</ButtonText>
        </Container>
    )
};

export default Button;