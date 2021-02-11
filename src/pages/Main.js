import React,{useEffect,useState,Component} from 'react';
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
  render(){
    
    if(this.state.pokemons.length === 0){
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                {this.state.pokemons.map(pokemon => {

                  const pokemonNumber = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
                  return(
                    <View key={pokemonNumber}>
                      <Pokemon name={pokemon.name} id={pokemonNumber}/>
                    </View>
                  )
                })}
                
                {/*<View style={{flexDirection:'row'}}>
                    <Pokemon name={'Venosauro'} id={3} elementos={['Grama','Veneno']}/>
                    <Pokemon name={'Charmander'} id={4} elementos={['Fogo']}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Pokemon name={'Charmeleon'} id={5} elementos={['Fogo']}/>
                    <Pokemon name={'Charizard'} id={6} elementos={['Fogo','Voador']}/>
              </View>*/}
                
            {/*<SafeAreaView>
            <FlatList
            data={pokemons}
            keyExtractor={(pokemon) => pokemon.name}
            contentContainerStyle={{flexGrow:1}}
            renderItem={PokemonShow}
            />
            </SafeAreaView>*/}
            </ScrollView>
        </View>
    )
  }

}

function PokemonShow(pokemon) {

  return (
    <View style={{flexDirection:'row'}}>
      <Text>{pokemon.item.name}</Text>
      <Pokemon/>
    </View>
  )
}

export default Main