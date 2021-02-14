import {StyleSheet,Dimensions} from 'react-native';

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    img:{
        width: '80%',
        height: '100%',
    },
    name:{
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 30,
        width: width,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0,0.2)',
        paddingBottom: 10
    },
    elements:{
        flexDirection: 'row',
        width: '100%',
    },
    imageBack:{
        width: '100%',
        height: '40%',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    element:{
        borderRadius: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent:'center',
        paddingHorizontal: 20,
        paddingBottom: 3
    },
    scrollView:{
        width: width,
    },
    text:{
        fontSize: 20,
        marginLeft: 20
    },
    grass:{
        backgroundColor:'#1A771E',
        color: '#36CE1D',
    },
    poison:{
        backgroundColor:'#8722D7',
        color: '#C6A4E0'
    },
    fire:{
        backgroundColor:'#DE5234',
        color:'#FBC2A2'
    },
    flying:{
        backgroundColor:'#BAD9D3',
        color:'#5BA497'
    },
    water:{
        backgroundColor:'#389FCB',
        color: '#093577'
    },
    bug:{
        backgroundColor:'#BEE963',
        color: '#647912'
    },
    normal:{
        backgroundColor:'#D7D7D7',
        color: '#707070'
    },
    eletric:{
        backgroundColor:'#E0DA4D',
        color: '#747125'
    },
    ground:{
        backgroundColor:'#CBB230',
        color: '#776922'
    },
    fighting:{
        backgroundColor:'#D86440',
        color:'#732A01'
    },
    psychic:{
        backgroundColor:'#D6488C',
        color: '#71183D'
    },
    rock:{
        backgroundColor:'#C7C18B',
        color: '#696958'
    },
    ghost:{
        backgroundColor:'#4A47C5',
        color: '#BDC4FF'
    },
    ice:{
        backgroundColor:'#40C9E8',
        color: '#CFFEF6'
    },
    dragon:{
        color:'#FFDEDE'
    },
    steel:{
        backgroundColor:'#A5A5A5',
        color: '#595959'
    },
    dark:{
        backgroundColor:'#4D3F36',
        color: '#A3A3A3'
    },
    fairy:{
        backgroundColor:'#ED83EF',
        color: '#BB15D6'
    },
})

export default styles