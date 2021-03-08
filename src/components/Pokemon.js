import React,{Component} from 'react';
import {View,Text,Image,TouchableNativeFeedback,ActivityIndicator} from 'react-native'
import styles from '../styles/pokemon'
import LinearGradient from 'react-native-linear-gradient'
import {translate} from '../translate/i18n'

class Pokemon extends Component {
    constructor(props){
        super(props)
        this.state = {
            elemento: '',
            background: '',
            tipos: [],
            name: '',
            id: 0,
            imagem: ''
        }
        this.carregaPokemon = this.carregaPokemon.bind(this)
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
                const name = data.forms[0].name
                const id = data.id
                const imagem = data.sprites.front_default
                if(this.props.element !== ''){
                    if(types.includes(this.props.element)){                   
                        this.setPokemons(types,name,id,imagem)
                    }                   
                    return
                }else{
                    this.setPokemons(types,name,id,imagem)
                    
                }
                
        })
    }

    setPokemons(data,name,id,imagem){
        switch(data[0]){
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
            case 'fairy':
                this.setState({background:styles.backgroundFairy})
                break 
            case 'fighting':
                this.setState({background:styles.backgroundFighting})
                break
            case 'psychic':
                this.setState({background:styles.backgroundPsychic})
                break       
            case 'rock':
                this.setState({background:styles.backgroundRock})
                break       
            case 'ice':
                this.setState({background:styles.backgroundIce})
                break 
            case 'ghost':
                this.setState({background:styles.backgroundGhost})
                break
            case 'steel':
                this.setState({background:styles.backgroundSteel})
                break 
            case 'dark':
                this.setState({background:styles.backgroundDark})
                break  
        }
        if(this.props.element !== ''){
            if(data.includes(this.props.element)){
                this.setState({tipos: data})
                this.setState({name:name})
                this.setState({id: id})
                if(this.state.imageNotShow.includes(id)){
                    this.setState({imagem: imagem})
                }else{
                    this.setState({imagem:`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png` })
                }
                
            }
            return
        }else{
            this.setState({tipos: data})
            this.setState({name: name})
            this.setState({id: id})
            this.setState({imagem: imagem})
        }
        
    }

    render() {
        if(this.state.imagem === ''){
            return(
                <View style={[styles.container,this.state.background]}>
                    <ActivityIndicator size="large" color='black'/>
                </View>
            )
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>{this.props.funcao(this.state.imagem,this.state.name,this.state.tipos,this.props.id)}}>
                    <View style={[styles.container,this.state.background]}>
                        <Image source={{uri:this.state.imagem}} style={styles.img}/>
                        <View style={styles.data}>
                            <Text style={styles.name}>{this.state.name}</Text>
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
                                                <LinearGradient colors={['#2029EC','#FF0000']} style={styles.element}  key={elemento}>
                                                    <Text style={[this.state.elemento]} key={elemento}>{translate(elemento)}</Text>
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
                                        case 'fairy':{
                                            this.state.elemento = styles.fairy
                                            break
                                        }
                                        case 'fighting':{
                                            this.state.elemento = styles.fighting
                                            break
                                        }
                                        case 'psychic':{
                                            this.state.elemento = styles.psychic
                                            break
                                        }
                                        case 'rock':{
                                            this.state.elemento = styles.rock
                                            break
                                        }
                                        case 'ice':{
                                            this.state.elemento = styles.ice
                                            break
                                        }
                                        case 'ghost':{
                                            this.state.elemento = styles.ghost
                                            break
                                        }
                                        case 'steel':{
                                            this.state.elemento = styles.steel
                                            break
                                        }
                                        case 'dark':{
                                            this.state.elemento = styles.dark
                                            break
                                        }
                                    }
                                    return(
                                        <Text style={[styles.element,this.state.elemento]} key={elemento}>{translate(elemento)}</Text>
                                    )
                                    
                                })}
                            </View>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
}

export default Pokemon
