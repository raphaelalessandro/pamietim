import {View, Text, Image } from 'react-native';

import Mensagem from './mensagem';

import logo from '../../../assets/002-1-react-native.png'; 

import styles from './styles';


export default function Exemplo2 () { 

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Atividade 2
            </Text>
            <Image source={logo} style={styles.imagem} /> 

            <Mensagem nome={'Raphael'} idade={16}/>
            <Mensagem nome={'amora'} idade={17} />
            <Mensagem nome={'kiki'} idade={18}/>
        </View>
    );
}