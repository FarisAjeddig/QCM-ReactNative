import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class ChooseLevel extends Component {
  render() {

    mode = this.props.navigation.getParam('mode')

    if (mode == "QC"){
      game='QuebecGame'
    } else {
      game='FrenchGame'
    }

    return (
      <View>
        <Text>Choisissez votre niveau : Mode {mode}</Text>
        <Button onPress={() => this.props.navigation.navigate(game, {
          level: 1
        })} title="Level 1"/>
        <Button onPress={() => this.props.navigation.navigate(game, {
          level: 2
        })} title="Level 2"/>
        <Button onPress={() => this.props.navigation.navigate(game, {
          level: 3
        })} title="Level 3"/>
        <Button onPress={() => this.props.navigation.navigate(game, {
          level: 4
        })} title="Level 4"/>
      </View>
    )
  }
};

export default ChooseLevel;
