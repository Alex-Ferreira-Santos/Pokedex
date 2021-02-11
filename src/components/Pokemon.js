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
            tipos: []
        }
        this.carregaPokemon()
    }

    async carregaPokemon(){
        await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}/`)
            .then(async response => {
                const dados = await response.json()
                return dados
            })
            .then(data => {
                const types = data.types.map( pokemon => pokemon.type.name)
                this.setPokemons(types)
        })
    }

    setPokemons(data){
        this.setState({tipos: data})
        switch(this.state.tipos[0]){
            case 'grass':
                this.setState({background:styles.backgroundGrass})
                break

            case 'poison':
                this.setState({background:styles.backgroundPoison})
                break

            case 'fire':
                this.setState({background:styles.backgroundFire})
                break

            case 'flying':
                this.setState({background:styles.backgroundFlying})       
                break

            case 'dragon':
                this.setState({background:styles.backgroundDragon})
                break

            case 'water':                  
                this.setState({background:styles.backgroundWater})                
                break   

            case 'bug':
                this.setState({background:styles.backgroundBug})
                break
                  
            case 'normal':
                this.setState({background:styles.backgroundNormal})
                break
                    
            case 'electric':
                this.setState({background:styles.backgroundEletric})
                break
                            
            case 'ground':
                this.setState({background:styles.backgroundGround})
                break
                            
        }
    }

    render() {
        const imagemUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.props.id}.png`
        return (
            <View style={[styles.container,this.state.background]}>
                <Image source={{uri:imagemUrl}} style={styles.img}/>
                <Text style={styles.name}>{this.props.name}</Text>
                <View style={styles.elementos}>
                    {this.state.tipos.map((elemento)=>{
                        switch(elemento){
                            case 'grass':
                                this.state.elemento = styles.grass
                                break
                            case 'poison':
                                this.state.elemento = styles.poison
                                break
                            case 'fire':
                                this.state.elemento = styles.fire
                                break
                            case 'flying':
                                this.state.elemento = styles.flying         
                                break
                            case 'dragon':
                                this.state.elemento = styles.dragon
                                return(
                                    <LinearGradient colors={['#2029EC','#FF0000']} style={styles.element}>
                                        <Text style={[this.state.elemento]} key={elemento}>{elemento}</Text>
                                    </LinearGradient>
                                )
                            case 'water':{
                                this.state.elemento = styles.water
                                break
                            }
                            case 'bug':{
                                this.state.elemento = styles.bug
                                break
                            }
                            case 'normal':{
                                this.state.elemento = styles.normal
                                break
                            }
                            case 'electric':{
                                this.state.elemento = styles.eletric
                                break
                            }
                            case 'ground':{
                                this.state.elemento = styles.ground
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
