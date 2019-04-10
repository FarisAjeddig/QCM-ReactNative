import React, { Component } from 'react';
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'

export class ChooseLevel extends Component {

  constructor (props) {
    super(props)
  }


  componentDidMount(){
    console.log(this.props);
  }

  _onClickLevel = (level) => {
    if ((mode === 'QC' && level <= this.props.level.levelQc) || (mode === 'FR' && level <= this.props.level.level)){
      this.props.navigation.navigate('FrenchGame', {
        level: level,
        mode: {mode}
      })
    } else {
      console.log(mode);
      Alert.alert("Vous n'avez pas encore débloqué ce niveau.")
    }

  }

  render() {

    mode = this.props.navigation.getParam('mode')

    return (
      <ImageBackground style={{flex: 1}} source={require('../Fonts/background-orange.jpeg')} >
        <ScrollView style={{flex: 1}}>
          <Text style={{textAlign: 'center', fontSize: 20}}>Choisissez votre niveau : Mode {mode}</Text>
          <TouchableOpacity style={styles.button} onPress={() => this._onClickLevel(1)} title="Level 1">
          <Text style={styles.text}>Level 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this._onClickLevel(2)} title="Level 2">
            <View style={{flexDirection:'row'}}>
              <Text style={styles.text}>Level 2
              </Text>
              {!((mode === 'QC' && 2 <= this.props.level.levelQc) || (mode === 'FR' && 2 <= this.props.level.level)) && (<Icon name="lock" style={{textAlign: 'left'}} size={20} color="gray" />)}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this._onClickLevel(3)} title="Level 3">
            <View style={{flexDirection:'row'}}>
              <Text style={styles.text}>Level 3
              </Text>
              {!((mode === 'QC' && 3 <= this.props.level.levelQc) || (mode === 'FR' && 3 <= this.props.level.level)) && <Icon name="lock" style={{textAlign: 'left'}} size={20} color="gray" />}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this._onClickLevel(4)} title="Level 4">
            <View style={{flexDirection:'row'}}>
              <Text style={styles.text}>Level 4
              </Text>
              {!((mode === 'QC' && 4 <= this.props.level.levelQc) || (mode === 'FR' && 4 <= this.props.level.level)) && <Icon name="lock" style={{textAlign: 'left'}} size={20} color="gray" />}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this._onClickLevel(5)} title="Level 5">
            <View style={{flexDirection:'row'}}>
              <Text style={styles.text}>Level 5
              </Text>
              {!((mode === 'QC' && 5 <= this.props.level.levelQc) || (mode === 'FR' && 5 <= this.props.level.level)) && <Icon name="lock" style={{textAlign: 'left'}} size={20} color="gray" />}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this._onClickLevel(6)} title="Level 6">
            <View style={{flexDirection:'row'}}>
              <Text style={styles.text}>Level 6
              </Text>
              {!((mode === 'QC' && 6 <= this.props.level.levelQc) || (mode === 'FR' && 6 <= this.props.level.level)) && <Icon name="lock" style={{textAlign: 'left'}} size={20} color="gray" />}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this._onClickLevel(7)} title="Level 7">
            <View style={{flexDirection:'row'}}>
              <Text style={styles.text}>Level 7
              </Text>
              {!((mode === 'QC' && 7 <= this.props.level.levelQc) || (mode === 'FR' && 7 <= this.props.level.level)) && <Icon name="lock" style={{textAlign: 'left'}} size={20} color="gray" />}
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    )
  }
};

const styles = StyleSheet.create({
  button: {
    margin: 30,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#1f3955',
    padding : 10,
    fontSize: 15,
    margin: -10,
    flex:1
  }
})

const mapStateToProps = state => {
  return {
    level: state.level
  }
}


export default connect(mapStateToProps)(ChooseLevel)
