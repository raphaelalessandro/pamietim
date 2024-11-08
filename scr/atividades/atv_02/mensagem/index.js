import { Text } from 'react-native';

import styles from './styles';

export default function Mensagem({nome, idade}) {
    return (
        <View style={styles.conatiner}>
        <Text style={styles.texto}>
            Olá {nome}
        </Text>
        <Text style={styles.idade}>
        Idade:{idade}
        </Text>
        </View>
    );
}

