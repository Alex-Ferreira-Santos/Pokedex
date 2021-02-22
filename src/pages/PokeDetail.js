import React,{Component} from 'react';
import {View,Text,Image,ScrollView,ActivityIndicator,TouchableHighlight,StatusBar} from 'react-native'
import styles from '../styles/pokeDetail'
import LinearGradient from 'react-native-linear-gradient'
import ArrowLeft from '../img/arrow.png'
import {AdMobBanner} from 'react-native-admob'
import {translate} from '../translate/i18n'

class PokeDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            element: '',
            pokemon: [],
            background: 'red',
            color: 'black',
            backgroundColor: 'white',
            height: ''
        }
        this.carregaPokemon = this.carregaPokemon.bind(this)
        this.setBackground = this.setBackground.bind(this)
        this.setTheme = this.setTheme.bind(this)
        this.carregaPokemon()
    }
    carregaPokemon(){
        const params = this.props.route.params
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then(response => response.json())
        .then(data => this.setState({pokemon:data}))
    }

    componentDidMount() {
        this.setTheme()
    }

    setTheme(){
        const params = this.props.route.params
        if(params.theme === 'light'){
            this.setState({color:'black'})
            this.setState({backgroundColor:'white'})
        }else{
            this.setState({color:'white'})
            this.setState({backgroundColor:'#303030'})
        }
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
                <View style={{justifyContent: 'center',alignItems: 'center',flex:1,backgroundColor:this.state.backgroundColor}}>
                    <Text style={{fontSize: 50,marginBottom: 10,color: this.state.color}}>{translate('loading')}</Text>
                    <ActivityIndicator color={this.state.color} size='large'/>
                </View>
            )
        }
        const params = this.props.route.params
        this.setBackground()
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={this.state.background.backgroundColor}/>
                <View style={[styles.imageBack,this.state.background]}>
                    <TouchableHighlight style={styles.goback} onPress={()=>{this.props.navigation.navigate('Main',{inicial: 0})}} underlayColor='#c4c4c4'>
                        <Image source={ArrowLeft}/>
                    </TouchableHighlight>
                    <Image source={{uri: params.img}} style={styles.img}/>
                </View>
                <ScrollView contentContainerStyle={[styles.scrollView,{backgroundColor:this.state.backgroundColor}]}>
                    <Text style={[styles.name,{color:this.state.color}]}>{params.name}</Text>
                    <View style={styles.section}>
                        <Text style={[styles.text,{color:this.state.color}]}>{translate('types')}: </Text>
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
                                        <LinearGradient colors={['#2029EC','#FF0000']} style={[styles.element,{marginLeft: 20}]}  key={elemento}>
                                            <Text style={[{fontSize: 20},this.state.element]} key={elemento}>{translate(elemento)}</Text>
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
                                <Text key={elemento} style={[styles.text,styles.element,this.state.element]}>{translate(elemento)}</Text>
                            )
                        
                        })} 
                    </View>
                    <View style={styles.section}>
                        <Text style={[styles.text,{color:this.state.color}]}>{translate('xp')}: <Text style={styles.number}>{this.state.pokemon.base_experience}</Text></Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={[styles.text,{color:this.state.color}]}>{translate('height')}: <Text style={styles.number}>{this.state.pokemon.height / 10}</Text> {translate('meter')}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={[styles.text,{color:this.state.color}]}>{translate('weight')}: <Text style={styles.number}>{this.state.pokemon.weight / 10}</Text> {translate('kilos')}</Text>
                    </View>
                    <Text style={[styles.lista,{color:this.state.color}]}>{translate('abilities')}</Text>
                    
                        {this.state.pokemon.abilities.map( pokemon => {
                            return(
                                <Text key={pokemon.ability.name} style={{textAlign:'center',fontSize:20,color:this.state.color}}>{pokemon.ability.name}</Text>
                            )
                        })}
                    
                    <Text style={[styles.lista,{color:this.state.color}]}>Status</Text>
                    {this.state.pokemon.stats.map(pokemon => 
                        <Text key={pokemon.stat.name} style={[styles.stats,{color:this.state.color}]}>{translate('amount')}<Text style={{fontWeight:'bold'}}>{pokemon.stat.name}</Text> {translate('inicial')}: <Text style={styles.number}>{pokemon.base_stat}</Text></Text>
                    )}
                    {this.state.pokemon.sprites.front_shiny && (
                        <View>
                        <Text style={[styles.lista,{color:this.state.color}]}>{translate('version')}</Text>
                        <View style={styles.version}>
                            <View style={styles.sprites}>
                                <Image source={{uri: this.state.pokemon.sprites.front_default}} style={styles.pokemon}/>
                                <Text style={[styles.legend,{color:this.state.color}]}>{translate('default')}</Text>
                            </View>
                            <View style={styles.sprites}>
                                <Image source={{uri: this.state.pokemon.sprites.front_shiny}} style={styles.pokemon}/>
                                <Text style={[styles.legend,{color:this.state.color}]}>Shiny</Text>
                            </View>
                        </View>
                        </View>
                    )}
                    {this.state.pokemon.moves && (
                        <View>
                            <Text style={[styles.lista,{color:this.state.color}]}>{translate('moves')}:</Text>
                            {this.state.pokemon.moves.map( pokemon => 
                            <View style={[styles.section,styles.atq]} key={pokemon.move.name}>
                                <Text style={[styles.moves,{fontWeight: 'bold',color:this.state.color}]}>{pokemon.move.name}</Text>
                                <Text style={[styles.moves,styles.level,{color:this.state.color}]}>{translate('learn')}: <Text style={styles.number}>{pokemon.version_group_details[0].level_learned_at}</Text></Text>
                            </View>
                            )}
                        </View>
                    )}
                        
                    
                </ScrollView>
                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111"
                    testDevices={[AdMobBanner.simulatorId]}
                    style={styles.ad}
                />
            </View>
        )
    }
}

export default PokeDetail