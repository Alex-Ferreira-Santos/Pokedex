import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#70AC54',
        width:'45%',
        margin: 10,
        borderRadius: 10,
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    name:{
        fontSize: 25
    },
    element:{
        borderRadius: 10,
        fontSize: 15,
        width: '40%',
        textAlign: 'center'
    },
   
    elementos:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }, grass:{
        backgroundColor:'#1A771E',
        color: '#36CE1D',
    },
    poison:{
        backgroundColor:'#8722D7',
        color: '#C6A4E0'
    }
})

export default styles