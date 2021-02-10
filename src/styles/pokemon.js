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
        fontSize: 25,
        marginBottom: 5
    },
    element:{
        borderRadius: 10,
        fontSize: 15,
        width: '40%',
        textAlign: 'center',
        alignItems: 'center',
    },
   
    elementos:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }, 
    img:{
        width: 150,
        height: 150
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
    }
})

export default styles