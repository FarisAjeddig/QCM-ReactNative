import React, { Component } from 'react';
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export class ChooseLevel extends Component {
  render() {

    mode = this.props.navigation.getParam('mode')

    if (mode == "QC"){
      game='QuebecGame'
    } else {
      game='FrenchGame'
    }

    return (
      <ScrollView style={{flex: 1}}>
        <Text>Choisissez votre niveau : Mode {mode}</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
          level: 1
        })} title="Level 1">
        <Text style={styles.text}>Level 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
          level: 2
        })} title="Level 2">
        <Text style={styles.text}>Level 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
          level: 3
        })} title="Level 3">
        <Text style={styles.text} style={styles.text}>Level 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
          level: 4
        })} title="Level 4">
        <Text style={styles.text}>Level 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
          level: 5
        })} title="Level 5">
        <Text style={styles.text}>Level 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
          level: 6
        })} title="Level 6">
        <Text style={styles.text}>Level 6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
          level: 7
        })} title="Level 7">
        <Text style={styles.text}>Level 7</Text>
        </TouchableOpacity>
        {mode == "FR" ?
        (<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
          level: 8
        })} title="Level 8"/>) : (<Text></Text>)
      }

      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  button: {
    margin: 30,
    padding: 10
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center'
  }
})

export default ChooseLevel;
