import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../Screens/Home'
import Settings from '../Screens/Settings'

const SearchStackNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Accueil'
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Options'
    }
  }
})

export default createAppContainer(SearchStackNavigator)
