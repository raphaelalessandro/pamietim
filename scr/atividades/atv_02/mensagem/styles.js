import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({ 
    texto: {
        fontSize: RFValue(20), 
        fontWeight: 'bold',
    }, 
    idade: {
        fontSize: RFValue(20),
    },
    container: {
        marginBottom: RFValue(10),
        borderBottomWidth:  RFValue(2),
        width: '100%',
        alignItems: 'center',
    }

});

export default styles;
