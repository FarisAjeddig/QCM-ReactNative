// Home.js

import React, { Component } from 'react';
import { Alert, View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-ionicons'

const data = [
  {
    question: "Question 1",
    answers:
    [{key: 'a', value: 'Réponse 1A (bonne)', answer: true},
    {key: 'b', value: 'Réponse 1B', answer: false},
    {key: "c", value: "Réponse 1C", answer: false},
    {key: 'd', value: 'Réponse 1D', answer: false}]
  },
  {
    question: "Question 2",
    answers:
    [{key: 'a', value: 'Réponse 2A (bonne)', answer: true},
    {key: 'b', value: 'Réponse 2B', answer: false},
    {key: "c", value: "Réponse 2C", answer: false},
    {key: 'd', value: 'Réponse 2D', answer: false}]
  },
  {
    question: "Question 3",
    answers:
    [{key: 'a', value: 'Réponse 3A (bonne)', answer: true},
    {key: 'b', value: 'Réponse 3B', answer: false},
    {key: "c", value: "Réponse 3C", answer: false},
    {key: 'd', value: 'Réponse 3D', answer: false}]
  },
  {
    question: "Question 4",
    answers:
    [{key: 'a', value: 'Réponse 4A (bonne)', answer: true},
    {key: 'b', value: 'Réponse 4B', answer: false},
    {key: "c", value: "Réponse 4C", answer: false},
    {key: 'd', value: 'Réponse 4D', answer: false}]
  },
  {
    question: "Question 5",
    answers:
    [{key: 'a', value: 'Réponse 5A (bonne)', answer: true},
    {key: 'b', value: 'Réponse 5B', answer: false},
    {key: "c", value: "Réponse 5C", answer: false},
    {key: 'd', value: 'Réponse 5D', answer: false}]
  }
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var start = getRandomInt(data.length)

export class Home extends Component {

  getInitialState = () => {
     const initialState = {
       numberOfLife: 5,
       QuestionAlreadyAsk: [start],
       question: data[start].question,
       answers: data[start].answers,
       end: false
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

  _displayIfStillLives(){
    if (this.state.numberOfLife > 0){
      return (
        <FlatList
          data={this.state.answers}
          renderItem={({item}) =>
            <View style={styles.answer}>
              <Button
                onPress={() => {
                  if (item.answer){
                    Alert.alert("Bonne réponse");
                    if (data.length == this.state.QuestionAlreadyAsk.length){
                      this.setState({end: true})
                    }
                    start = getRandomInt(data.length)
                    while (this.state.QuestionAlreadyAsk.includes(start)) {
                      start = getRandomInt(data.length)
                    }
                  }
                  else {
                    const newNumberOfLife = this.state.numberOfLife-1
                    this.setState({numberOfLife: newNumberOfLife })
                    Alert.alert("Mauvaise réponse");
                  }
                }}
                title={item.value}
                color="#1f3955"
              />
            </View>
            }
        />
      );
    }
    else {
      return (
        <Text style={{fontSize: 25, textAlign: 'center'}}>Perdu ! </Text>
      )
    }
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
        {this._displayIfStillLives()}
        <TouchableOpacity style={{alignItems: 'center', justifyContent: 'flex-end'}} onPress={() => this._getBackToInitialState()}>
          <Image style={{width: 50, height: 50}} source={require('../Fonts/replay.png')} />
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
