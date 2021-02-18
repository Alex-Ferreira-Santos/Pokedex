import React,{Component} from 'react';
import {View,Text,Image,TouchableHighlight} from 'react-native'
import styles from '../styles/home'
import pokebola from '../img/pokebola.png'
import pokedex from '../img/Pokedex.png'
import Icon from 'react-native-vector-icons/Ionicons'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'sunny-outline',
            color:'#DDDD00',
            underlayColor: '#F0EC95',
            backgroundColor: {backgroundColor:'#FFFB99'}
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.main}>
                    <TouchableHighlight style={[styles.mode,this.state.backgroundColor]} underlayColor={this.state.underlayColor} onPress={()=>{
                        if(this.state.name === 'sunny-outline'){
                            this.setState({name:'moon'})
                            this.setState({backgroundColor:{backgroundColor:'#483FB1'}})
                            this.setState({color:'#F0C419'})
                            this.setState({underlayColor:'#5D56B1'})
                        }else{
                            this.setState({name:'sunny-outline'})
                            this.setState({backgroundColor:{backgroundColor:'#FFFB99'}})
                            this.setState({color:'#DDDD00'})
                            this.setState({underlayColor:'#F0EC95'})
                        }
                    }}>
                        <Icon name={this.state.name} color={this.state.color} size={50}/>
                    </TouchableHighlight>
                    <Image source={pokedex}/>
                    <Text style={styles.text}>Veja os dados de seus pokémons favoritos</Text>
                    <Image source={pokebola} style={styles.img}/>
                    <TouchableHighlight style={styles.button} onPress={()=>{this.props.navigation.navigate('Main',{inicial: 0})}} underlayColor='#B9AC36'>
                        <Text style={styles.buttonText}>Seguir</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default HomePage