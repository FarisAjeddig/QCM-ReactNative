// Home.js

import React, { Component } from 'react';
import { Alert, View, Text, Button, FlatList } from 'react-native';

export class Home extends Component {

  constructor (props) {
    super(props)
    this.state={
      numberOfLife: 5,
      question: "Question 1",
      answers: [{key: 'a', value: 'Réponse A (bonne)', answer: true}, {key: 'b', value: 'Réponse B', answer: false}, {key: "c", value: "Réponse C", answer: false}, {key: 'd', value: 'Réponse D', answer: false}]
    }
  }

  render() {
    console.log("test");
    return (
      <View>
        <Text>QCM Expressions quebecoises</Text>
        <Text> Nombre de vie : {this.state.numberOfLife} </Text>
        {/* <Button onPress={() => this.props.navigation.navigate('Settings')} title="Settings"/> */}
        <View>
          <Text>{this.state.question}</Text>
        </View>
        <FlatList
          data={this.state.answers}
          renderItem={({item}) =>
            <View>
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
      </View>
    )
  }
}

export default Home
