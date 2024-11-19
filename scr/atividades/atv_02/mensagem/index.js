import { Text, View } from 'react-native';

import styles from './styles';

export default function Mensagem({nome, idade}) {
    return (
        <View style={styles.container}>
        <Text style={styles.texto}>
            Olá {nome}
        </Text>
        <Text style={styles.idade}>
        Idade:{idade}
        </Text>
        </View>
    );
}

