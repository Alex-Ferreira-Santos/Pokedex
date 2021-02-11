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

    carregaPokemon(){
        console.log('id: '+this.props.id)
        fetch(`https://pokeapi.co/api/v2/pokemon/1/`,{
            method:'GET',
            headers:{
                'Accept': 'application/json'
            }
            }).then(async response => {
                console.log('Passou aqui')
                console.log(response)
                return await response.json()
            })
            .then(data => {
                const types = data.types.map( pokemon => pokemon.type.name)
                this.state.tipos = types
                console.log('Passou aqui 2')
        })
    }

    render() {
        const imagemUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.props.id}.png`
        return (
            <View style={[styles.container,this.state.background]}>
                <Image source={{uri:imagemUrl}} style={styles.img}/>
                <Text style={styles.name}>{this.props.name}</Text>
                <View style={styles.elementos}>
                    {this.state.tipos.map((elemento)=>{
                        console.log(this.state.tipos)
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
