import { createStackNavigator, createAppContainer } from 'react-navigation'
import { fromLeft } from 'react-navigation-transitions';
import FrenchGame from '../Screens/FrenchGame'
import QuebecGame from '../Screens/QuebecGame'
import Home from '../Screens/Home'
import ChooseLevel from '../Screens/ChooseLevel'

const SearchStackNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      title: "Page d'accueil - Bienvenue"
    }
  },

  ChooseLevel: {
    screen: ChooseLevel,
    navigationOptions: {
      title: "Choix du niveau"
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
},{
  initialRouteName: 'Home',
  transitionConfig: () => fromLeft()
})

export default createAppContainer(SearchStackNavigator)
