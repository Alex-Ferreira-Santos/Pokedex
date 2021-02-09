import React,{Component} from 'react';
import {View,Text,Image} from 'react-native'
import styles from '../styles/pokemon'

class Pokemon extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.name}>Bulbassauro</Text>
                <Image/>
                <View style={styles.elementos}>
                    <Text style={[styles.element,styles.grass]}>Grama</Text>
                    <Text style={[styles.element,styles.poison]}>Veneno</Text>
                </View>
            </View>
        )
    }
}

export default Pokemon
