import React,{Component} from 'react';
import {View,Text,Image,ScrollView} from 'react-native'
import styles from '../styles/pokeDetail'
import LinearGradient from 'react-native-linear-gradient'

class PokeDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            element: ''
        }
    }
    render() {
        const params = this.props.route.params
        return (
            <View style={styles.container}>
                <View style={styles.imageBack}>
                    <Image source={{uri: params.img}} style={styles.img}/>
                </View>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Text style={styles.name}>{params.name}</Text>
                    <View style={styles.elements}>
                        <Text style={styles.text}>Elementos: </Text>
                        {params.element.map( elemento => {
                            switch(elemento){
                                case 'grass':
                                    this.state.element = styles.grass
                                    break
                                case 'poison':
                                    this.state.element = styles.poison
                                    break
                                case 'fire':
                                    this.state.element = styles.fire
                                    break
                                case 'flying':
                                    this.state.element = styles.flying         
                                    break
                                case 'dragon':
                                    this.state.element = styles.dragon
                                    return(
                                        <LinearGradient colors={['#2029EC','#FF0000']} style={styles.element}  key={elemento}>
                                            <Text style={[styles.text,this.state.element]} key={elemento}>{elemento}</Text>
                                        </LinearGradient>
                                    )
                                case 'water':{
                                    this.state.element = styles.water
                                    break
                                }
                                case 'bug':{
                                    this.state.element = styles.bug
                                    break
                                }
                                case 'normal':{
                                    this.state.element = styles.normal
                                    break
                                }
                                case 'electric':{
                                    this.state.element = styles.eletric
                                    break
                                }
                                case 'ground':{
                                    this.state.element = styles.ground
                                    break
                                }
                                case 'fairy':{
                                    this.state.element = styles.fairy
                                    break
                                }
                                case 'fighting':{
                                    this.state.element = styles.fighting
                                    break
                                }
                                case 'psychic':{
                                    this.state.element = styles.psychic
                                    break
                                }
                                case 'rock':{
                                    this.state.element = styles.rock
                                    break
                                }
                                case 'ice':{
                                    this.state.elemento = styles.ice
                                    break
                                }
                                case 'ghost':{
                                    this.state.element = styles.ghost
                                    break
                                }
                                case 'steel':{
                                    this.state.element = styles.steel
                                    break
                                }
                                case 'dark':{
                                    this.state.element = styles.dark
                                    break
                                }
                            }
                            return (
                                <Text key={elemento} style={[styles.text,styles.element,this.state.element]}>{elemento}</Text>
                            )
                        
                        })} 
                    </View>
                </ScrollView>
                
            </View>
        )
    }
}

export default PokeDetail