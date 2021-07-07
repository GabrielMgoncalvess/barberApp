import React from 'react';
import { Image } from 'react-native';

import { Container, Title, } from './styles';

import logoimg from '../../essets/logo.png';
import Input from '../../components/input';
import Button from '../../components/button';

const SignIn = () => {
    return (
        <Container>
            <Image source={logoimg} />
            <Title>Faça seu Logon</Title>
            <Input  name="email" icon="mail" placeholder="E-mail"/>
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button onPress={() => {}}>Entrar</Button>
        </Container>
    )
}

export default SignIn;
