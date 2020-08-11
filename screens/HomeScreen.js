import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {
 

  goToBuzzerScreen=(buzzercolor)=> {
      this.props.navigation.navigate('BuzzerScreen',{color:buzzercolor})
    }
  render(){
    return(
      <View>
        <AppHeader/>
        
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"purple"}]} 
            onPress={()=>this.goToBuzzerScreen("grey")}>
            <Text style={styles.buttonText}>Headlines</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"purple"}]} 
            onPress={()=>this.goToBuzzerScreen("grey")}>
            <Text style={styles.buttonText}>Riddles</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"purple"}]} 
            onPress={()=>this.goToBuzzerScreen("grey")}>
            <Text style={styles.buttonText}>Weather</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"purple"}]} 
            onPress={()=>this.goToBuzzerScreen("grey")}>
            <Text style={styles.buttonText}>Fashion</Text>
          </TouchableOpacity>
           
      
      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})