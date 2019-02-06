import { createStackNavigator, createAppContainer } from 'react-navigation'
import FrenchGame from '../Screens/FrenchGame'
import QuebecGame from '../Screens/QuebecGame'
import Home from '../Screens/Home'

const SearchStackNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      title: "Page d'accueil - Bienvenue"
    }
  },

  FrenchGame: {
    screen: FrenchGame,
    navigationOptions: {
      title: 'Mode Français'
    }
  },
  QuebecGame: {
    screen: QuebecGame,
    navigationOptions: {
      title: 'Mode Quebecois'
    }
  }
})

export default createAppContainer(SearchStackNavigator)
