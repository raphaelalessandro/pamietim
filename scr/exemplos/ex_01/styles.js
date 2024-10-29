import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: 'orange',
    padding: 8,
},
titulo:{
    fontSize: RFValue(20),
    color:'#fafafa',
},
});
export default styles;