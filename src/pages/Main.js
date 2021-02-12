import React,{Component} from 'react';
import {View,Text,FlatList,SafeAreaView,ScrollView} from 'react-native'
import Pokemon from '../components/Pokemon'
import styles from '../styles/main'

class Main extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      pokemons:[]
    }
    this.carregaPokemons()
    this.setPokemons = this.setPokemons.bind(this)
  }
  
  carregaPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    .then(response => response.json())
    .then(data => {
      this.setPokemons(data.results)
    })
  }

  setPokemons(data){
    this.setState({pokemons: data})
  }

  PokemonShow(pokemon) {
    const pokemons = pokemon.item
    const pokemonNumber = pokemons.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
    return (
      <View key={pokemonNumber}>
          <Pokemon name={pokemons.name} id={pokemonNumber}/>
      </View>
    )
  }

  render(){
    
    if(this.state.pokemons.length === 0){
      return(
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:'#303030'}}>
          <Text style={{fontSize: 50,color:'white'}}>Carregando...</Text>
        </View>
      )
    }
    return (
        <View style={styles.container}>
          <FlatList
            data={this.state.pokemons}
            keyExtractor={(pokemon) => pokemon.name}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={this.PokemonShow}
            />          
        </View>
    )
  }

}

export default Main