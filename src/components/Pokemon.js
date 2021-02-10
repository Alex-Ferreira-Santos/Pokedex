import React,{Component} from 'react';
import {View,Text,Image} from 'react-native'
import styles from '../styles/pokemon'
import LinearGradient from 'react-native-linear-gradient'

class Pokemon extends Component {
    constructor(props){
        super(props)
        this.state = {
            elemento: '',
            background: '',
        }
    }
    render() {
        const imagemUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.props.id}.png`
        return (
            <View style={[styles.container,this.state.background]}>
                <Image source={{uri:imagemUrl}} style={styles.img}/>
                <Text style={styles.name}>{this.props.name}</Text>
                <View style={styles.elementos}>
                    {this.props.elementos.map((elemento)=>{
                        console.log(this.state.elemento)
                        switch(elemento){
                            case 'grass':
                                this.state.elemento = styles.grass
                                if(this.state.background === ''){
                                    this.state.background = styles.backgroundGrass
                                }
                                
                                break
                            case 'poison':
                                this.state.elemento = styles.poison
                                if(this.state.background === ''){
                                    this.state.background = styles.backgroundPoison
                                }
                                
                                break
                            case 'fire':
                                this.state.elemento = styles.fire
                                if(this.state.background === ''){
                                    this.state.background = styles.backgroundFire
                                }
                                
                                break
                            case 'flying':
                                this.state.elemento = styles.flying
                                if(this.state.background === ''){
                                    this.state.background = styles.backgroundFlying
                                }
                                
                                break
                            case 'dragon':
                                this.state.elemento = styles.dragon
                                if(this.state.background === ''){
                                    this.state.background = styles.backgroundDragon
                                }
                                
                                return(
                                    <LinearGradient colors={['#2029EC','#FF0000']} style={styles.element}>
                                        <Text style={[this.state.elemento]} key={elemento}>{elemento}</Text>
                                    </LinearGradient>
                                )
                            case 'water':{
                                this.state.elemento = styles.water
                                if(this.state.background === ''){
                                    this.state.background = styles.backgroundWater
                                }
                                
                                break
                            }
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
