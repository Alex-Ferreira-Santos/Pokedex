import React,{Component} from 'react';
import {View,Text,Image,TouchableHighlight} from 'react-native'
import styles from '../styles/home'
import pokebola from '../img/pokeball.png'
import pokedex from '../img/Simpledex.png'
import Icon from 'react-native-vector-icons/Ionicons'
import {translate} from '../translate/i18n'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'sunny-outline',
            color:'#DDDD00',
            underlayColor: '#F0EC95',
            backgroundColor: {backgroundColor:'#FFFB99'},
            mainColor: 'white',
            textColor: 'black',
            theme: 'light'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.main,{backgroundColor:this.state.mainColor}]}>
                    <TouchableHighlight style={[styles.mode,this.state.backgroundColor]} underlayColor={this.state.underlayColor} onPress={()=>{
                        if(this.state.name === 'sunny-outline'){
                            this.setState({name:'moon'})
                            this.setState({backgroundColor:{backgroundColor:'#483FB1'}})
                            this.setState({color:'#F0C419'})
                            this.setState({underlayColor:'#5D56B1'})
                            this.setState({mainColor:'#303030'})
                            this.setState({textColor:'white'})
                            this.setState({theme:'dark'})
                        }else{
                            this.setState({name:'sunny-outline'})
                            this.setState({backgroundColor:{backgroundColor:'#FFFB99'}})
                            this.setState({color:'#DDDD00'})
                            this.setState({underlayColor:'#F0EC95'})
                            this.setState({mainColor:'white'})
                            this.setState({textColor:'black'})
                            this.setState({theme:'light'})
                        }
                    }}>
                        <Icon name={this.state.name} color={this.state.color} size={50}/>
                    </TouchableHighlight>
                    <Image source={pokedex} />
                    <Text style={[styles.text,{color:this.state.textColor}]}>{translate('descriptionHome')}</Text>
                    <Image source={pokebola} style={styles.img}/>
                    <TouchableHighlight style={styles.button} onPress={()=>{this.props.navigation.navigate('Main',{inicial: 0,theme: this.state.theme})}} underlayColor='#B9AC36'>
                        <Text style={styles.buttonText}>{translate('buttonHome')}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default HomePage