import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, AsyncStorage, FlatList, Alert, Button, StyleSheet } from 'react-native';



export class Home extends Component {


  render() {
    return (
      <ImageBackground style={{flex: 1}} source={require('../Fonts/background-orange.jpeg')} >
        <View style={{flex: 3}}>
          <Text style={{flex: 1, textAlign: 'center', justifyContent: 'center', textAlignVertical: 'center', fontSize: 30, color:'white'}}>
            React Native
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.navigate('ChooseLevel', {
          mode: 'QC'
        })} title="Mode Quebecois">
          <Text style={{borderRadius: 5, borderWidth: 2, borderColor: 'white', color: '#fff', padding : 10, fontSize: 20, textAlign: 'center', margin: 15}}>Quebecois</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.navigate('ChooseLevel', {
          mode: 'FR'
        })} title="Mode Français">
          <Text style={{borderRadius: 5, borderWidth: 2, borderColor: 'white', color: '#fff', padding : 10, fontSize: 20, textAlign: 'center', margin: 15}}>Français</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
};

export default Home
