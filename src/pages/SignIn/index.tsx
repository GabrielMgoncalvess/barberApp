import React from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText} from './styles';

import logoimg from '../../essets/logo.png';
import Input from '../../components/input';
import Button from '../../components/button';

import { Formik } from 'formik';
import * as yup from 'yup';


const SignIn = (props:any) => {
    const navigation = useNavigation();

    const schema = yup.object().shape({
        email: yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
        password: yup.string().required('Senha obrigatória'),
    });

    const initialValues = {
        email: '',
        password: '',
    }

    interface submitValues {
        email: string;
        password: string
    }

    async function handleSignIn(values:submitValues) {
        try {
            return(console.log(values))

        } catch {
            Alert.alert('erro', 'erro2')
        }
    }
  

    return (
        <>
            <KeyboardAvoidingView style={{ flex: 1 }}  behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex:1 }}>
                <Container>

                    <Image source={logoimg} />

                    <View><Title>Faça seu Logon</Title></View> 

                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSignIn}
                            validationSchema={schema}
                        >               
                        {({values, handleChange, handleSubmit}) => (
                            <>
                                <Input 
                                    name="email" icon="mail" 
                                    placeholder="E-mail" 
                                    value={values.email} 
                                    onChangeText={handleChange('email')}
                                    autoCorrect={false} 
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                />

                                <Input 
                                    name="password" 
                                    icon="lock" 
                                    placeholder="Senha" 
                                    value={values.password} 
                                    onChangeText={handleChange('password')} 
                                    secureTextEntry
                                    returnKeyType="send"
                                    onSubmitEditing={handleSubmit}
                                />

                                <Button title="Entrar" onPress={handleSubmit}/>
                            </>
                        )}
                        </Formik> 
                    
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
