import React,{Component} from 'react';
import {View,Text,Image,ScrollView,ActivityIndicator,TouchableHighlight} from 'react-native'
import styles from '../styles/pokeDetail'
import LinearGradient from 'react-native-linear-gradient'
import ArrowLeft from '../img/arrow.png'

class PokeDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            element: '',
            pokemon: [],
            background: ''
        }
        this.carregaPokemon = this.carregaPokemon.bind(this)
        this.setBackground = this.setBackground.bind(this)
        this.carregaPokemon()
    }
    carregaPokemon(){
        const params = this.props.route.params
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then(response => response.json())
        .then(data => this.setState({pokemon:data}))
    }

    setBackground(){
        if(this.state.pokemon !== undefined){
            switch(this.state.pokemon.types[0].type.name){
                case 'grass':
                    this.state.background = styles.backgroundGrass
                    break
                case 'poison':
                    this.state.background = styles.backgroundPoison
                    break
                case 'fire':
                    this.state.background = styles.backgroundFire
                    break
                case 'flying':
                    this.state.background = styles.backgroundFlying     
                    break
                case 'dragon':
                    this.state.background = styles.backgroundDragon
                    break
                case 'water':                  
                    this.state.background = styles.backgroundWater               
                    break   
                case 'bug':
                    this.state.background = styles.backgroundBug
                    break        
                case 'normal':
                    this.state.background = styles.backgroundNormal
                    break            
                case 'electric':
                    this.state.background = styles.backgroundEletric
                    break                  
                case 'ground':
                    this.state.background = styles.backgroundGround
                    break
                case 'fairy':
                    this.state.background = styles.backgroundFairy
                    break 
                case 'fighting':
                    this.state.background = styles.backgroundFighting
                    break
                case 'psychic':
                    this.state.background = styles.backgroundPsychic
                    break       
                case 'rock':
                    this.state.background = styles.backgroundRock
                    break       
                case 'ice':
                    this.state.background = styles.backgroundIce
                    break 
                case 'ghost':
                    this.state.background = styles.backgroundGhost
                    break
                case 'steel':
                    this.state.background = styles.backgroundSteel
                    break 
                case 'dark':
                    this.state.background = styles.backgroundDark
                    break  
            }
        }
        
    }

    render() {
        if(this.state.pokemon.abilities === undefined){
            return(
                <View style={{justifyContent: 'center',alignItems: 'center',flex:1}}>
                    <Text style={{fontSize: 50,marginBottom: 10}}>Carregando</Text>
                    <ActivityIndicator color='black' size='large'/>
                </View>
            )
        }
        const params = this.props.route.params
        this.setBackground()
        return (
            <View style={styles.container}>
                <View style={[styles.imageBack,this.state.background]}>
                    <TouchableHighlight style={styles.goback} onPress={()=>{this.props.navigation.navigate('Main',{inicial: 0})}} underlayColor='#c4c4c4'>
                        <Image source={ArrowLeft}/>
                    </TouchableHighlight>
                    <Image source={{uri: params.img}} style={styles.img}/>
                </View>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Text style={styles.name}>{params.name}</Text>
                    <View style={styles.section}>
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
                    <View style={styles.section}>
                        <Text style={styles.text}>Experiência básica ao derrotar: <Text style={styles.number}>{this.state.pokemon.base_experience}</Text></Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>Altura do pokémon: <Text style={styles.number}>{this.state.pokemon.height / 10}</Text> metros</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>Peso do pokémon: <Text style={styles.number}>{this.state.pokemon.weight / 10}</Text> quilos</Text>
                    </View>
                    <Text style={styles.lista}>Habilidades</Text>
                    
                        {this.state.pokemon.abilities.map( pokemon => {
                            return(
                                <Text key={pokemon.ability.name} style={{textAlign:'center',fontSize:20}}>{pokemon.ability.name}</Text>
                            )
                        })}
                    
                    <Text style={styles.lista}>Status</Text>
                    {this.state.pokemon.stats.map(pokemon => 
                        <Text key={pokemon.stat.name} style={styles.stats}>quantidade de <Text style={{fontWeight:'bold'}}>{pokemon.stat.name}</Text> inicial: <Text style={styles.number}>{pokemon.base_stat}</Text></Text>
                    )}
                    <Text style={styles.lista}>Versões</Text>
                    <View style={styles.version}>
                        <View style={styles.sprites}>
                            <Image source={{uri: this.state.pokemon.sprites.front_default}} style={styles.pokemon}/>
                            <Text style={styles.legend}>Padrão</Text>
                        </View>
                        <View style={styles.sprites}>
                            <Image source={{uri: this.state.pokemon.sprites.front_shiny}} style={styles.pokemon}/>
                            <Text style={styles.legend}>Shiny</Text>
                        </View>
                    </View>
                    <Text style={styles.lista}>Lista de movimentos:</Text>
                    
                        {this.state.pokemon.moves.map( pokemon => 
                            <View style={[styles.section,styles.atq]} key={pokemon.move.name}>
                                <Text style={[styles.moves,{fontWeight: 'bold'}]}>{pokemon.move.name}</Text>
                                <Text style={[styles.moves,styles.level]}>Pode aprender no nivel: <Text style={styles.number}>{pokemon.version_group_details[0].level_learned_at}</Text></Text>
                            </View>
                        )}
                    
                </ScrollView>
                
            </View>
        )
    }
}

export default PokeDetail