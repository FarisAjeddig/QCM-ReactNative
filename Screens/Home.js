// Home.js

import React, { Component } from 'react';
import { Alert, View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';


export class Home extends Component {

  getInitialState = () => {
     const initialState = {
       numberOfLife: 5,
       question: "Question 1",
       answers: [
         {key: 'a', value: 'Réponse A (bonne)', answer: true},
         {key: 'b', value: 'Réponse B', answer: false},
         {key: "c", value: "Réponse C", answer: false},
         {key: 'd', value: 'Réponse D', answer: false}
       ]
     };
     return initialState;
  }

  constructor (props) {
    super(props)
    this.state=this.getInitialState()
  }

  _getBackToInitialState(){
    this.setState(this.getInitialState());
  }

  render() {
    console.log("test");
    return (
      <View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          {/* <Button onPress={() => this.props.navigation.navigate('Settings')} title="Settings"/> */}
          <View style={styles.question}>
            <Text style={{fontSize: 26, textAlign: 'center'}}>{this.state.question}</Text>
          </View>
          <Text style={styles.numberLife}>{this.state.numberOfLife} vies restantes ! </Text>
        </View>
        <FlatList
          data={this.state.answers}
          renderItem={({item}) =>
            <View style={styles.answer}>
              <Button
                onPress={() => {
                  if (item.answer){
                    console.log("Bonne réponse !");
                    Alert.alert("Bonne réponse");
                  }
                  else {
                    const newNumberOfLife = this.state.numberOfLife-1
                    this.setState({numberOfLife: newNumberOfLife })
                    console.log("Mauvaise réponse !");
                    Alert.alert("Mauvaise réponse");
                  }
                }}
                title={item.value}
                color="#1f3955"
              />
            </View>
            }
        />
        <TouchableOpacity onPress={() => this._getBackToInitialState()}>
          <Text>Recommencer </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  numberLife: {
    flex: 1,
    color: 'rgb(195, 18, 18)'
  },
  question: {
    flex: 2,
    color: 'rgb(233, 166, 86)',
    marginBottom: 20
  },
  answer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  }
})

export default Home
