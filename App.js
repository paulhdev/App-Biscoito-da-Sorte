import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

class Botao extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }

    this.styles = StyleSheet.create({
      Botao: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: props.cor,
        borderRadius: 25,
      },
      BtnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      BtnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: props.cor
      }
    })
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.Botao} onPress={this.props.onPress}>
        <View style={this.styles.BtnArea}>
          <Text style={this.styles.BtnTexto}>{this.props.nome}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

class App extends Component {

  constructor(props) {
    super(props)
      this.state = {
        textoFrase: ''
      }
      this.quebrarBiscoito = this.quebrarBiscoito.bind(this)

      this.frases = [
        'A vida trará coisas boas se tiver paciência',
        'Não compense na ira o que lhe falta na razão.',
        'Defeitos e virtudes são apenas dois lados da mesma moeda.',
        'A maior de todas as torres começa no solo.',
        'Acredite em milagres, mas não dependa deles.',
        "Siga os bons e aprenda com eles.",
        "O bom-senso vale mais do que muito conhecimento.",
        "Sem o fogo do entusiasmo, não há o calor da vitória."
      ]
  }

  quebrarBiscoito() {
    let state = this.state

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'

    this.setState(state)
  }

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.Image} source={require('./images/biscoito.png')} />

        <Text style={styles.TextoFrase}>{this.state.textoFrase}</Text>

        <Botao cor='#dd7a22' nome='Abrir biscoito' onPress={this.quebrarBiscoito} />

      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Image: {
    width: 250,
    height: 250
  },
  TextoFrase: {
    fontSize: 20,
    fontStyle: 'italic',
    margin: 30,
    color: '#dd7a22'
  }
})