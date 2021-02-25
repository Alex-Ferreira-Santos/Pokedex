import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#c21e0c',
        alignItems: 'center',
    },
    contentContainerStyle:{
        alignItems: 'center',
    },
    inside:{
        width:'95%',
        backgroundColor: 'white',
    },
    section:{
        backgroundColor: '#c21e0c',
        paddingVertical: 10,
    },
    ad:{
        position: 'absolute',
        bottom: 0,
    },
    modal:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup:{
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10
    },
    button:{
        flexDirection: 'row',
        maxWidth: '90%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title:{
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 10
    },
    opnion:{
        textAlign: 'center',
        fontSize: 20,
        maxWidth: '80%',
        marginBottom: 20,
    },
    back:{
        backgroundColor: 'white',
        borderColor: '#00C2FF',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10
    },
    rate:{
        backgroundColor: '#00C2FF',
        borderRadius: 15,
        padding: 10
    },
    buttonText:{
        fontSize: 20
    },
})

export default styles