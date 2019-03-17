// Home.js

import React, { Component } from 'react';
import { Alert, View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-ionicons'
import data from '../Data/data'

function getRandomInt(max, ensDoesNotAppart) { // ensDoesNotAppart est le tableau d'éléments auquel ne doit pas appartenir le résultat.
  if (ensDoesNotAppart.length == max){
    return false
  } else {
    start = Math.floor(Math.random() * Math.floor(max));
    while (true){
      console.log(start);
      if (ensDoesNotAppart.indexOf(start) == -1){
        return start
      } else {
        start = Math.floor(Math.random() * Math.floor(max));
      }
    }
  }
}

export class QuebecGame extends Component {

    getInitialState = () => {
      start = getRandomInt(data.length, []);

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

    _skipQuestion(){
      if (this.state.end || this.state.numberOfLife == 0){
        Alert.alert("Vous avez déjà fini ou perdu le jeu.")
      } else {
        Alert.alert("Vous venez de passer la question, et de perdre une vie.");
        if (data.length == this.state.QuestionAlreadyAsk.length){
          this.setState({end: true})
          } else {
            start = getRandomInt(data.length, this.state.QuestionAlreadyAsk);
            this.setState({
              QuestionAlreadyAsk: [ ...this.state.QuestionAlreadyAsk, ...[start]],
              question: data[start].question,
              answers: data[start].answers,
              numberOfLife: this.state.numberOfLife-1
            })
          }
        }
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
                      else {
                        start = getRandomInt(data.length, this.state.QuestionAlreadyAsk)
                        this.setState({
                          QuestionAlreadyAsk: [ ...this.state.QuestionAlreadyAsk, ...[start]],
                          question: data[start].question,
                          answers: data[start].answers
                        })
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

      const end = this.state.end
      let Game;

      if (end) {
          Game = <Text>Fini</Text>;
      } else {
          Game = this._displayIfStillLives();
      }

      return (
        <View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={styles.question}>
              <Text style={{fontSize: 26, textAlign: 'center'}}>{this.state.question}</Text>
            </View>
            <Text style={styles.numberLife}>{this.state.numberOfLife} vies restantes ! </Text>
          </View>
          {Game}
          <TouchableOpacity style={{alignItems: 'center', justifyContent: 'flex-end'}} onPress={() => this._getBackToInitialState()}>
            <Image style={{width: 50, height: 50}} source={require('../Fonts/replay.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center', justifyContent: 'flex-end'}} onPress={() => this._skipQuestion()}>
            <Text>Skip</Text>
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

export default QuebecGame
