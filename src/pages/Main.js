import React,{useEffect,useState} from 'react';
import {View,Text,FlatList,SafeAreaView,ScrollView} from 'react-native'
import Pokemon from '../components/Pokemon'
import styles from '../styles/main'

function Main(){ 

  const [pokemons,setPokemons] = useState([])
  
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?offset=1&limit=10',{
      method:'GET',
      headers:{
        'Accept': 'application/json'
      }
    }).then(response => response.json())
    .then(data => {
      setPokemons(data.results)
    })
  },[])
    console.log('length: '+pokemons.length)
    if(pokemons.length === 0){
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                {pokemons.map(pokemon => {

                  const pokemonNumber = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
                  console.log('PokemonNumber:' + pokemonNumber)
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

function PokemonShow(pokemon) {

  return (
    <View style={{flexDirection:'row'}}>
      <Text>{pokemon.item.name}</Text>
      <Pokemon/>
    </View>
  )
}

export default Main