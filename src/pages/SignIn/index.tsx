import React from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText} from './styles';

import logoimg from '../../essets/logo.png';
import Input from '../../components/input';
import Button from '../../components/button';

const SignIn = () => {
    const navigation = useNavigation();

    return (
        <>
            <KeyboardAvoidingView style={{ flex: 1 }}  behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex:1 }}>
                <Container>
                    <Image source={logoimg} />

                    <View><Title>Faça seu Logon</Title></View> 
                    <Input  name="email" icon="mail" placeholder="E-mail"/>
                    <Input name="password" icon="lock" placeholder="Senha" />
                    <Button onPress={() => {}}>Entrar</Button>
                    <ForgotPassword onPress={() => {}}>
                        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                    </ForgotPassword>
                </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
                <Icon name="log-in" size={20} color="#ff9000" />
                <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
            </CreateAccountButton>
        </>
    )
}

export default SignIn;
