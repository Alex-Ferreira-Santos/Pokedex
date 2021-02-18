import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#c21e0c',
        alignItems: 'center',
        justifyContent:'center'
    },
    main:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
        width: '90%',
        height: '90%',
        borderRadius: 50
    },
    img:{
        marginVertical: 50
    },
    button:{
        backgroundColor:'#c21e0c',
        width:'50%',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonText:{
        fontSize: 25,
        color: 'white'
    },
    text:{
        marginTop: 20,
    },
    mode:{
        borderRadius: 50,
        padding: 10,
        position: 'absolute',
        top:20,
        right: 20,
    }
})

export default styles