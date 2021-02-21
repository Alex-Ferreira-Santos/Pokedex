import React,{Component} from 'react';
import {View,Text,FlatList,ActivityIndicator,Dimensions} from 'react-native'
import Pokemon from '../components/Pokemon'
import styles from '../styles/main'
import RNPickerSelect from 'react-native-picker-select'
import pickerSelectStyles from '../styles/pickerSelectStyle'
import {AdMobBanner} from 'react-native-admob'
import {translate} from '../translate/i18n'

class Main extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      pokemons:[],
      loading: false,
      elemento: '',
      inicio: this.props.route.params.inicial,
      color: 'black',
      background: '',
      height: '100%'
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
        this.setState({pokemons: [...this.state.pokemons,data].sort((pokemon1,pokemon2) => {
          const pokemonNumber1 = pokemon1.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
          const pokemonNumber2 = pokemon2.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
          return pokemonNumber1 - pokemonNumber2
        })})
      }
    }else{
      if(this.state.pokemons.findIndex(pokemon => pokemon.name === data[0].name) === -1){
        this.setState({pokemons: [...this.state.pokemons,...data].sort((pokemon1,pokemon2) => {
          const pokemonNumber1 = pokemon1.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
          const pokemonNumber2 = pokemon2.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
          return pokemonNumber1 - pokemonNumber2  
        })})
      }
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
        <Text>{translate('pokemonLoading')}</Text>
        <ActivityIndicator size="large" color={this.state.color}/>
      </View>
    )
  }

  render(){
    if(this.state.pokemons.length === 0){
      return(
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:this.state.background}}>
          <Text style={{fontSize: 50,margin: 20,color:this.state.color}}>{translate('loading')}</Text>
          <ActivityIndicator size="large" color={this.state.color}/>
        </View>
      )
    }
    return (
        <View style={styles.container}>
          <View style={[styles.inside,{backgroundColor:this.state.background,height:this.state.height}]}>
            <View style={styles.section}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                placeholder={{
                    label: translate('label'),
                    value: '',
                    color: '#9EA0A4',
                }}
                value={this.state.elemento}
                onValueChange={(value)=>{
                    this.setState({elemento: value})
                    this.setState({pokemons:[]})
                    this.state.inicio = 0
                    this.carregaPokemons()
                }}
                style={pickerSelectStyles}
                items={[
                    { label: translate('grass'), value: 'grass'},
                    { label: translate('poison'), value: 'poison'},
                    { label: translate('fire'), value: 'fire'},
                    { label: translate('flying'), value: 'flying'},
                    { label: translate('water'), value: 'water'},
                    { label: translate('bug'), value: 'bug'},
                    { label: translate('normal'), value: 'normal'},
                    { label: translate('electric'), value: 'electric'},
                    { label: translate('ground'), value: 'ground'},
                    { label: translate('fairy'), value: 'fairy'},
                    { label: translate('psychic'), value: 'psychic'},
                    { label: translate('rock'), value: 'rock'},
                    { label: translate('ice'), value: 'ice'},
                    { label: translate('dragon'), value: 'dragon'},
                    { label: translate('steel'), value: 'steel'},
                    { label: translate('dark'), value: 'dark'},
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
            onAdLoaded={()=>{
              const height = Dimensions.get('screen').height
              this.setState({height: height - 138});
            }}
            testDevices={[AdMobBanner.simulatorId]}
            style={styles.ad}
          />
        </View>
    )
  }

}

export default Main