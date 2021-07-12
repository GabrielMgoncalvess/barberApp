import React from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, BackToSignIn, BackToSignInText} from './styles';

import logoimg from '../../essets/logo.png';
import Input from '../../components/input';
import Button from '../../components/button';

import { Formik } from 'formik';
import * as yup from 'yup';

const SignUp = () => {
    const navigation = useNavigation();

    const schema= yup.object().shape({
        name: yup.string().min(2, 'Nome com no mínimo 2 caracteres').required('Nome obrigatório'),
        email: yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
        password: yup.string().min(6, 'No mínimo 6 caracteres'),
    });

    const initialValuess = {
        name: '',
        email: '',
        password:''
    };

    interface submitValues {
        name: string;
        email: string;
        password: string;
    };

    function handleSubmit(values:submitValues) {
        return (console.log(values))
    };

    return (
        <>
            <KeyboardAvoidingView style={{ flex: 1 }}  behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex:1 }}>
                    <Container>
                        <Image source={logoimg} />

                        <View><Title>Crie sua conta</Title></View>

                        <Formik
                        initialValues={initialValuess}
                        onSubmit={handleSubmit}
                        validationSchema={schema}
                        >    
                        {({values, handleChange, handleSubmit}) => (             
                            <>
                                <Input  
                                name="name" 
                                icon="user" placeholder="Nome" 
                                value={values.name}
                                onChangeText={handleChange('name')}
                                autoCapitalize="words"
                                returnKeyType="next"
                                />

                                <Input  
                                name="email" 
                                icon="mail" placeholder="E-mail"
                                value={values.email} 
                                onChangeText={handleChange('email')}
                                autoCorrect={false} 
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                />

                                <Input 
                                name="password" icon="lock" placeholder="Senha"
                                value={values.password} 
                                onChangeText={handleChange('password')}
                                secureTextEntry
                                textContentType="newPassword"
                                returnKeyType="send"
                                onSubmitEditing={handleSubmit}
                                />

                                <Button title="Criar conta" onPress={handleSubmit}>Criar conta</Button>
                            </>
                        )}
                        </Formik>
                    
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
