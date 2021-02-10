import React,{useEffect,Component} from 'react';
import {View,Text,FlatList,SafeAreaView,ScrollView} from 'react-native'
import Pokemon from '../components/Pokemon'
import styles from '../styles/main'

class Main extends Component(){
  constructor(props){
    super(props)
    this.state = {
      pokemons:[],
      types:[]
    }
  }

  render(){
  
    useEffect(()=>{
      fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1',{
        method:'GET',
        headers:{
          'Accept': 'application/json'
        }
      }).then(response => response.json())
      .then(data => {
        this.state.pokemons = data.results
      })
    },[])
  
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                {this.state.pokemons.map(pokemon => {

                  const pokemonNumber = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');

                  
                    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`,{
                      method:'GET',
                      headers:{
                        'Accept': 'application/json'
                      }
                    }).then(response => response.json())
                    .then(data => {
                      const types = data.types.map( pokemon => pokemon.type.name)
                      this.state.types = types
                    })
                 

                  return(
                    <View key={pokemonNumber}>
                      <Pokemon name={pokemon.name} id={pokemonNumber} elementos={this.state.types}/>
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

{/*function PokemonShow(pokemon) {

  return (
    <View style={{flexDirection:'row'}}>
      <Text>{pokemon.item.name}</Text>
      <Pokemon/>
    </View>
  )
}*/}

export default Main