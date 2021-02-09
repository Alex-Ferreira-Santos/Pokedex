import React,{Component} from 'react';
import {View,Text,Image,TouchableHighlight} from 'react-native'
import styles from '../styles/home'
import pikachu from '../img/pikachu.png'
import pokedex from '../img/Pokedex.png'

class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={pokedex}/>
                <Text style={styles.text}>Veja os dados de seus pokémons favoritos</Text>
                <Image source={pikachu} style={styles.img}/>
                <TouchableHighlight style={styles.button} onPress={()=>{this.props.navigation.navigate('Main')}} underlayColor='#B9AC36'>
                    <Text style={styles.buttonText}>Seguir</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default HomePage