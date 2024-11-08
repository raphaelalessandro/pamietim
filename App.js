import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

import Exemplo1 from './scr/exemplos/ex_01';
import Exemplo2 from './scr/exemplos/ex_02';
import Exemplo3 from './scr/exemplos/ex_03';
import Exemplo4 from './scr/exemplos/ex_04';

import Atividade1 from './scr/atividades/atv_01';
import Atividade2 from './scr/atividades/atv_02';
import Atividade3 from './scr/atividades/atv_03';
import Atividade4 from './scr/atividades/atv_04';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade2/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    padding: 16,
    paddingTop: Constants.StatusBarHeight ||16,
   // alignItems: 'center',
   // justifyContent: 'center',
  },
});
