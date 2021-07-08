import React from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, BackToSignIn, BackToSignInText} from './styles';

import logoimg from '../../essets/logo.png';
import Input from '../../components/input';
import Button from '../../components/button';

const SignUp = () => {
    const navigation = useNavigation();

    return (
        <>
            <KeyboardAvoidingView style={{ flex: 1 }}  behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex:1 }}>
                <Container>
                    <Image source={logoimg} />

                    <View><Title>Crie sua conta</Title></View> 
                    <Input  name="name" icon="user" placeholder="Nome"/>
                    <Input  name="email" icon="mail" placeholder="E-mail"/>
                    <Input name="password" icon="lock" placeholder="Senha" />
                    <Button onPress={() => {}}>Entrar</Button>
                
                </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <BackToSignIn onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={20} color="#fff" />
                <BackToSignInText>Voltar para Logon</BackToSignInText>
            </BackToSignIn>
        </>
    )
}

export default SignUp;
