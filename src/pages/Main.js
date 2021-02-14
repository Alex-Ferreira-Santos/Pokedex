import React,{Component} from 'react';
import {View,Text,FlatList,ActivityIndicator} from 'react-native'
import Pokemon from '../components/Pokemon'
import styles from '../styles/main'
import RNPickerSelect from 'react-native-picker-select'
import pickerSelectStyles from '../styles/pickerSelectStyle'

class Main extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      pokemons:[],
      loading: false,
      elemento: '',
    }
    this.setPokemons = this.setPokemons.bind(this)
    this.carregaPokemons = this.carregaPokemons.bind(this)
    this.loading = this.loading.bind(this)
    this.PokemonShow = this.PokemonShow.bind(this)
  }
  
  componentDidMount(){
    this.carregaPokemons()
  }

  carregaPokemons(){ 
    const params = this.props.route.params
    this.state.loading = true
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${params.inicial}&limit=15`)
    .then(response => response.json())
    .then(data => {
      
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
        console.log('passou else')
        this.setPokemons(data.results)
      }
      
    })
    
    params.inicial = params.inicial + 15
    this.setState({loading: false})
    console.log(params.inicial)
    
    
  }

  setPokemons(data,elemento = false){
    if(elemento){
      this.setState({pokemons: [...this.state.pokemons,data]})
    }else{
      this.setState({pokemons: [...this.state.pokemons,...data]})
    } 
  }

  PokemonShow(pokemon) {
    const pokemons = pokemon.item
    const pokemonNumber = pokemons.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
    return (
      <Pokemon id={pokemonNumber} element={this.state.elemento} key={pokemon.pokemonNumber} />
    )
  }

  loading = () => {
    if(this.state.loading){
      return null
    }
    return(
      <View style={{flex:1}}>
        <Text style={{color: 'white'}}>Carregando mais pokémons</Text>
        <ActivityIndicator size="large" color="white"/>
      </View>
    )
  }

  render(){
    if(this.state.pokemons.length === 0){
      return(
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:'#303030'}}>
          <Text style={{fontSize: 50,color:'white',margin: 20}}>Carregando</Text>
          <ActivityIndicator size="large" color="white"/>
        </View>
      )
    }
    return (
        <View style={styles.container}>
          <View style={styles.inside}>
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
                    this.props.route.params.inicial = 0
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
        </View>
    )
  }

}

export default Main