import React,{useEffect,useState} from 'react';
import {View,Text,FlatList,SafeAreaView,ScrollView} from 'react-native'
import Pokemon from '../components/Pokemon'
import styles from '../styles/main'

function Main(){

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
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={{flexDirection:'row'}}>
                   <Pokemon name={'Bulbassauro'} id={1} elementos={['Grama','Veneno']}/>
                    <Pokemon name={'Ivysauro'} id={2} elementos={['Grama','Veneno']}/> 
                </View>
                <View style={{flexDirection:'row'}}>
                    <Pokemon name={'Venosauro'} id={3} elementos={['Grama','Veneno']}/>
                    <Pokemon name={'Charmander'} id={4} elementos={['Fogo']}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Pokemon name={'Charmeleon'} id={5} elementos={['Fogo']}/>
                    <Pokemon name={'Charizard'} id={6} elementos={['Fogo','Dragon']}/>
                </View>
                
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
    <View style={{width: 100,height:100,backgroundColor:'orange'}}>
      <Text>{pokemon.item.name}</Text>
      <Pokemon/>
    </View>
  )
}

export default Main