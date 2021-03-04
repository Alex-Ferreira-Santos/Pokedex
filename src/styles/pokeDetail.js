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
    section:{
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10
    },
    imageBack:{
        width: '100%',
        height: '40%',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    goback:{
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor:'white',
        borderRadius: 50,
        padding: 10,
        zIndex:1
    },
    element:{
        borderRadius: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent:'center',
        paddingHorizontal: 10,
        paddingBottom: 3
    },
    scrollView:{
        width: width,
    },
    text:{
        fontSize: 20,
        marginLeft: 20,
    },
    lista:{
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 20,
        borderTopWidth: 1,
        paddingTop: 10,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    version:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: width,
    },
    sprites:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    pokemon:{
        width: 200,
        height: 200,
    },
    legend:{
        fontSize: 20
    },
    moves:{
        fontSize: 16,
        marginLeft: 20,
    },
    level:{
        position:'absolute',
        right: 10,
    },
    stats:{
        marginLeft: 20,
        fontSize: 18,
        marginVertical: 5
    },
    number:{
        color: '#0AA407'
    },
    atq:{
        borderTopWidth: 1,
        borderBottomWidth: 1
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
    backgroundGrass:{
        backgroundColor:'#70AC54'
    },
    backgroundPoison:{
        backgroundColor:'#B682DF'
    },
    backgroundFire:{
        backgroundColor:'#EA8F7B'
    },
    backgroundFlying:{
        backgroundColor:'#ABF1E4'
    },
    backgroundWater:{
        backgroundColor:'#6FC9EF'
    },
    backgroundBug:{
        backgroundColor:'#93AF56'
    },
    backgroundNormal:{
        backgroundColor:'#C4C4C4'
    },
    backgroundEletric:{
        backgroundColor:'#FFF85B'
    },
    backgroundGround:{
        backgroundColor:'#AB9624'
    },
    backgroundFighting:{
        backgroundColor:'#BA4824'
    },
    backgroundPsychic:{
        backgroundColor:'#B11E65'
    },
    backgroundRock:{
        backgroundColor:'#A39D6F'
    },
    backgroundGhost:{
        backgroundColor:'#6C6AD3'
    },
    backgroundIce:{
        backgroundColor:'#72E5FF'
    },
    backgroundDragon:{
        backgroundColor:'#4845B1'
    },
    backgroundSteel:{
        backgroundColor:'#6C6666'
    },
    backgroundDark:{
        backgroundColor:'#7A685D'
    },
    backgroundFairy:{
        backgroundColor:'#FEB5FF'
    },
})

export default styles