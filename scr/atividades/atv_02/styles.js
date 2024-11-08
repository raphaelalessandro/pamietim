import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
   container:{
    padding: RFValue(15),
    alignItems:'center',
    width: '100%',
    height:'100%',
    backgroundColor: 'orange',
    borderRadius: RFValue(20),
},
titulo:{
    fontSize: RFValue(25),
    color:'#fafafa',
},
imagem: {
    width: '80%',
    resizeMode: 'center', //stretch
}
});
export default styles;