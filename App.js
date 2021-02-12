import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Main from './src/pages/Main'
import HomePage from './src/pages/HomePage'

const Stack = createStackNavigator()

class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePage} options={{headerShown: false}}/>
          <Stack.Screen name='Main' component={Main} options={{headerShown: false}} initialParams={{inicial:0}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


export default App