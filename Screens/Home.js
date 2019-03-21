import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Home extends Component {
  render() {
    return (
      <View>
        <Text>Bienvenue dans notre jeu !</Text>
        <Button onPress={() => this.props.navigation.navigate('ChooseLevel', {
          mode: 'QC'
        })} title="Mode Quebecois"/>
        <Button onPress={() => this.props.navigation.navigate('ChooseLevel', {
          mode: 'FR'
        })} title="Mode Français"/>
      </View>
    )
  }
};

export default Home;
