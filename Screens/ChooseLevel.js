import React, { Component } from 'react';
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export class ChooseLevel extends Component {
  render() {

    mode = this.props.navigation.getParam('mode')

    if (mode == "QC"){
      game='FrenchGame'
    } else {
      game='FrenchGame'
    }

    return (
      <ImageBackground style={{flex: 1}} source={require('../Fonts/background-orange.jpeg')} >
        <ScrollView style={{flex: 1}}>
          <Text style={{textAlign: 'center', fontSize: 20}}>Choisissez votre niveau : Mode {mode}</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
            level: 1,
            mode: this.mode
          })} title="Level 1">
          <Text style={styles.text}>Level 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
            level: 2,
            mode: this.mode
          })} title="Level 2">
          <Text style={styles.text}>Level 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
            level: 3,
            mode: this.mode
          })} title="Level 3">
          <Text style={styles.text} style={styles.text}>Level 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
            level: 4,
            mode: this.mode
          })} title="Level 4">
          <Text style={styles.text}>Level 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
            level: 5,
            mode: this.mode
          })} title="Level 5">
          <Text style={styles.text}>Level 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
            level: 6,
            mode: this.mode
          })} title="Level 6">
          <Text style={styles.text}>Level 6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
            level: 7,
            mode: this.mode
          })} title="Level 7">
          <Text style={styles.text}>Level 7</Text>
          </TouchableOpacity>
          {mode == "FR" ?
          (<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(game, {
            level: 8,
            mode: this.mode
          })} title="Level 8">
              <Text style={styles.text}>Level 8</Text>
            </TouchableOpacity>
        ) : (<Text></Text>)
        }

        </ScrollView>
      </ImageBackground>
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
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    color: '#1f3955',
    padding : 10,
    fontSize: 15,
    margin: -10
  }
})

export default ChooseLevel;
