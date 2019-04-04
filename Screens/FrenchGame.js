import React, { Component } from 'react';
import { Alert, View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import datas from '../Data/data'


function getRandomInt(max, ensDoesNotAppart){ // ensDoesNotAppart est le tableau d'éléments auquel ne doit pas appartenir le résultat.
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

// Mélange un tableau
function shuffle(arr) {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

export class FrenchGame extends Component {

  // Nombre de vie initiale pour le jeu
  numberOfLife = 6;

  getInitialState = () => {

    if (this.props.navigation.getParam('mode') == 'FR'){
      let dataName = "Francais_Level_" + this.props.navigation.getParam('level');
      data = datas[dataName]
    } else {
      let dataName = "Qc_Level_" + this.props.navigation.getParam('level');
      data = datas[dataName]
    }

    start = getRandomInt(data.length, []);

    const initialState = {
      numberOfLife: this.numberOfLife,
      QuestionAlreadyAsk: [start],
      question: data[start].question,
      answers: shuffle(data[start].answers),
      end: false,
      colorAnswer: "#1f3955",
      colorWrongAnswer: "#1f3955"
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

  componentDidMount(){
    this.getInitialState();
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

  _wait(ms){
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
    }

  _displayIfStillLives(){
    if (this.state.numberOfLife > 0){
      return (
        <FlatList
          data={shuffle(this.state.answers)}
          renderItem={({item}) =>
            <View style={styles.answer}>
                <TouchableOpacity
                  onPress={() => {
                    if (item.answer){
                      this.setState({colorAnswer: "green"})
                      Alert.alert('Bonne réponse')
                      // {this._wait(2000)}
                      if (data.length == this.state.QuestionAlreadyAsk.length){
                        this.setState({end: true, colorAnswer: "1f3955"})
                      }
                      else {
                        start = getRandomInt(data.length, this.state.QuestionAlreadyAsk)
                        this.setState({
                          QuestionAlreadyAsk: [ ...this.state.QuestionAlreadyAsk, ...[start]],
                          question: data[start].question,
                          answers: data[start].answers,
                          colorAnswer: "#1f3955"
                        })
                      }
                    }
                    else {
                      Alert.alert('Mauvaise réponse')
                      const newNumberOfLife = this.state.numberOfLife-1
                      this.setState({numberOfLife: newNumberOfLife })
                    }
                  }}
                  title={item.value}
                  color={(item.answer) ? this.state.colorAnswer : this.state.colorWrongAnswer}
                >
                  <Text style={styles.textAnswer}>{item.value}</Text>
                </TouchableOpacity>
            </View>
            }
        />
      );
    }
    else {
      return (
        <View>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Vous avez perdu</Text>
          <Text style={{fontSize: 16, textAlign: 'center'}}>Cliquez sur le bouton en bas pour réessayer</Text>
        </View>
      )
    }
  }

  render() {

    const end = this.state.end
    const level = this.props.navigation.getParam('level')

    let Game;
    if (end) {
        Game = (
          <View>
            <Text style={{textAlign: 'center', justifyContent: 'center'}}>Félicitation, vous avez débloqué le niveau {this.props.navigation.getParam('level')+1}.</Text>
          </View>
          );
    } else {
        Game = this._displayIfStillLives();
    }

    let Lifes = [];
    for (let i=0; i<this.state.numberOfLife; i++){
      Lifes.push(<Icon name="heart" size={40} color="red" />)
    }
    if (this.state.numberOfLife < this.numberOfLife){
      for (i = this.state.numberOfLife; i<this.numberOfLife; i++){
        Lifes.push(<Icon name="heart" size={40} color="black" />)
      }
    }

    return (
      <ImageBackground style={{flex: 1}} source={require('../Fonts/background-2.jpeg')} >

        <View style={{flexDirection: 'column', flex: 1}}>

          <View style={{flexDirection: 'row', marginTop: 20, flex:1}}>
            {/*<Text style={{flex: 1}}>Level {this.props.navigation.getParam('level')}, mode {this.props.navigation.getParam('mode')}</Text>*/}
            <Text style={styles.numberLife}>
              {Lifes}
            </Text>
            <TouchableOpacity style={{flex:1, alignItems: 'center'}} onPress={() => this._skipQuestion()}>
              <Icon name="arrow-right" size={40} color="black" />
              <Text>Skip</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.question}>
            {!end ? (<Text style={{fontSize: 26, textAlign: 'center'}}>{this.state.question}</Text>) : (<Text></Text>)}
          </View>
          <View style={{flex: 2}}>
            {Game}
          </View>

          <TouchableOpacity style={{alignItems: 'center', justifyContent: 'flex-end'}} onPress={() => this._getBackToInitialState()}>
            {/*<Image style={{width: 50, height: 50}} source={require('../Fonts/replay.png')} />*/}
            <Icon name="retweet" size={50} />
          </TouchableOpacity>

        </View>

      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  numberLife: {
    flex: 1,
    marginLeft: 50
  },
  question: {
    flex: 1,
    color: 'rgb(233, 166, 86)',
    marginBottom: 0
  },
  answer: {
    flex: 0.25,
    marginTop: 10,
    marginBottom: 10
  },
  textAnswer: {
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    borderWidth: 1,
    borderColor: 'white',
    color: '#1f3955',
    padding : 5,
    fontSize: 15,
    marginRight: 30,
    marginLeft: 30
  }
})

export default FrenchGame
