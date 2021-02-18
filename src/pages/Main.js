import React,{Component} from 'react';
import {View,Text,FlatList,ActivityIndicator} from 'react-native'
import Pokemon from '../components/Pokemon'
import styles from '../styles/main'
import RNPickerSelect from 'react-native-picker-select'
import pickerSelectStyles from '../styles/pickerSelectStyle'
import {AdMobBanner} from 'react-native-admob'

class Main extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      pokemons:[],
      loading: false,
      elemento: '',
      inicio: this.props.route.params.inicial,
      color: 'black',
      background: ''
    }
    this.setPokemons = this.setPokemons.bind(this)
    this.carregaPokemons = this.carregaPokemons.bind(this)
    this.loading = this.loading.bind(this)
    this.PokemonShow = this.PokemonShow.bind(this)
    this.pokeDetail = this.pokeDetail.bind(this)
    this.setInicio = this.setInicio.bind(this)
    this.setTheme = this.setTheme.bind(this)
  }
  
  componentDidMount(){
    this.setTheme()
    this.carregaPokemons()
  }

  pokeDetail(img,name,element,id){
    const params = this.props.route.params
    this.props.navigation.navigate('PokeDetail',{img:img,name:name,element:element,id:id,theme:params.theme})
  }

  carregaPokemons(){ 
    const length = this.state.pokemons.length
    this.state.loading = true
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.state.inicio}&limit=15`)
    .then(response => response.json())
    .then(data => {
      
      if(this.state.inicio < 898){
        if(this.state.elemento !== ''){
          data.results.map(async(pokemons)=>{
            let pokemonNumber = pokemons.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
            
            await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
            .then( response => response.json())
            .then( dados => {
              const types = dados.types.map(pokemon => pokemon.type.name)
              let pokemonPosition = data.results.indexOf(pokemons)
              if(types.includes(this.state.elemento)){
                this.setPokemons(data.results[pokemonPosition],true)
              }
            })
          })   
        }else{
          this.setPokemons(data.results)      
        }
        this.setState({inicio: this.state.inicio + 15})   
        this.state.loading = false 
        this.setInicio(length)
      }
    })   
  }
  setInicio(length){
    if(length === this.state.pokemons.length || this.state.pokemons.length === 0){
      this.carregaPokemons()
    }
  }

  setPokemons(data,elemento = false){
    if(elemento){
      if(this.state.pokemons.findIndex(pokemon => pokemon.name === data.name) === -1){
        this.setState({pokemons: [...this.state.pokemons,data]})
      }
    }else{
      this.setState({pokemons: [...this.state.pokemons,...data]})
    } 
  }

  PokemonShow(pokemon) {
    const pokemons = pokemon.item
    const pokemonNumber = pokemons.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
    return (
      <Pokemon id={pokemonNumber} element={this.state.elemento} key={pokemon.pokemonNumber} funcao={this.pokeDetail}/>
    )
  }

  setTheme(){
    const params = this.props.route.params
    if(params.theme === 'light'){
      this.setState({color: 'black'})
      this.setState({background: 'white'})
    }else{
      this.setState({color: 'white'})
      this.setState({background: '#303030'})
    }
  }

  loading = () => {
    if(this.state.loading){
      return null
    }
    return(
      <View style={{flex:1}}>
        <Text>Carregando mais pokémons</Text>
        <ActivityIndicator size="large" color={this.state.color}/>
      </View>
    )
  }

  render(){
    if(this.state.pokemons.length === 0){
      return(
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:this.state.background}}>
          <Text style={{fontSize: 50,margin: 20,color:this.state.color}}>Carregando</Text>
          <ActivityIndicator size="large" color={this.state.color}/>
        </View>
      )
    }
    return (
        <View style={styles.container}>
          <View style={[styles.inside,{backgroundColor:this.state.background}]}>
            <View style={styles.section}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                placeholder={{
                    label: 'Selecione o elemento para filtrar os pokémons',
                    value: this.state.elemento,
                    color: '#9EA0A4',
                }}
                onValueChange={(value)=>{
                    this.setState({elemento: value})
                    this.setState({pokemons:[]})
                    this.state.inicio = 0
                    this.carregaPokemons()
                }}
                style={pickerSelectStyles}
                items={[
                    { label: 'Grama', value: 'grass'},
                    { label: 'Veneno', value: 'poison'},
                    { label: 'Fogo', value: 'fire'},
                    { label: 'Voador', value: 'flying'},
                    { label: 'Água', value: 'water'},
                    { label: 'Besouro', value: 'bug'},
                    { label: 'Normal', value: 'normal'},
                    { label: 'Elétrico', value: 'electric'},
                    { label: 'Terra', value: 'ground'},
                    { label: 'Fada', value: 'fairy'},
                    { label: 'Psiquico', value: 'psychic'},
                    { label: 'Pedra', value: 'rock'},
                    { label: 'Gelo', value: 'ice'},
                    { label: 'Dragão', value: 'dragon'},
                    { label: 'Metal', value: 'steel'},
                    { label: 'Sombrio', value: 'dark'},
                ]}
              />
            </View>
            
            <FlatList
              data={this.state.pokemons}
              keyExtractor={(pokemon) => pokemon.name}
              contentContainerStyle={styles.contentContainerStyle}
              renderItem={this.PokemonShow}
              onEndReached={this.carregaPokemons}
              onEndReachedThreshold={0.1}
              ListFooterComponent={this.loading}
              />
          </View>     
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

export default Main