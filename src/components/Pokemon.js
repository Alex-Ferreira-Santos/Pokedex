import React,{Component} from 'react';
import {View,Text,Image} from 'react-native'
import styles from '../styles/pokemon'
import LinearGradient from 'react-native-linear-gradient'

class Pokemon extends Component {
    constructor(props){
        super(props)
        this.state = {
            elemento: ''
        }
    }
    render() {
        const imagemUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.props.id}.png`
        return (
            <View style={styles.container}>
                <Image source={{uri:imagemUrl}} style={styles.img}/>
                <Text style={styles.name}>{this.props.name}</Text>
                <View style={styles.elementos}>
                    {this.props.elementos.map((elemento)=>{
                        switch(elemento){
                            case 'Grama':
                                this.state.elemento = styles.grass
                                break
                            case 'Veneno':
                                this.state.elemento = styles.poison
                                break
                            case 'Fogo':
                                this.state.elemento = styles.fire
                                break
                            case 'Voador':
                                this.state.elemento = styles.flying
                                break
                            case 'Dragon':
                                this.state.elemento = styles.dragon
                                return(
                                    <LinearGradient colors={['#2029EC','#FF0000']} style={styles.element}>
                                        <Text style={[this.state.elemento]} key={elemento}>{elemento}</Text>
                                    </LinearGradient>
                                )
                        }
                        return(
                            <Text style={[styles.element,this.state.elemento]} key={elemento}>{elemento}</Text>
                        )
                        
                    })}
                </View>
            </View>
        )
    }
}

export default Pokemon
