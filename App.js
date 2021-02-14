import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Main from './src/pages/Main'
import HomePage from './src/pages/HomePage'
import PokeDetail from './src/pages/PokeDetail'

const Stack = createStackNavigator()

class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomePage} options={{headerShown: false}}/>
          <Stack.Screen name='Main' component={Main} options={{headerShown: false}} initialParams={{inicial:0}}/>
          <Stack.Screen name='PokeDetail' component={PokeDetail} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


export default App