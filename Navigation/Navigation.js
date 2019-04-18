import { createStackNavigator, createAppContainer } from 'react-navigation'
import { fromLeft } from 'react-navigation-transitions';
import FrenchGame from '../Screens/FrenchGame'
import Home from '../Screens/Home'
import ChooseLevel from '../Screens/ChooseLevel'

const SearchStackNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      title: "Page d'accueil - Bienvenue",
      header: null
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
      title: 'Jouez'
    }
  },

},{
  initialRouteName: 'Home',
  transitionConfig: () => fromLeft()
})

export default createAppContainer(SearchStackNavigator)
