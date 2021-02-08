import React,{useEffect,useState} from 'react';
import {View,Text,FlatList,SafeAreaView} from 'react-native'

function App(){

  const [pokemons,setPokemons] = useState([])
  
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon',{
      method:'GET',
      headers:{
        'Accept': 'application/json'
      }
    }).then(response => response.json())
    .then(data => {
      setPokemons(data.results)
    })
  },[])
 
    return (
      <SafeAreaView>
        <FlatList
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.name}
          contentContainerStyle={{flexGrow:1}}
          renderItem={PokemonShow}
        />
      </SafeAreaView>
    )
}

function PokemonShow(pokemon) {
  console.log(pokemon)
  return (
    <View style={{width: 100,height:100,backgroundColor:'orange'}}>
      <Text>{pokemon.item.name}</Text>
    </View>
  )
}

export default App