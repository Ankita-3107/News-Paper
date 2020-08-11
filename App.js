import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import BuzzerScreen from './screens/BuzzerScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
   constructor(){
    super();
    this.state= {
    like:0,
    dislike:0
    }
  }

  componentDidMount(){

  }
  incrementCounter(){
   this.setState([like: this.state.like+1]);
   this.setState([dislike: this.state.dislike+1]);

  }
  render() {
    return (
      
      <View>
        <AppContainer/>
        <TouchableOpacity onPress ={this.likePressed}>
        <Image 
        style ={{width:90, height:90, marginRight:10}}
        source= {require('./tup.png')}
        />
        </TouchableOpacity>

        <TouchableOpacity onPress ={this.dislikePressed}>
        <Image 
        style ={{width:90, height:90, marginRight:10}}
        source= {require('./tdo.png')}
        />
        </TouchableOpacity>

         <Text>{this.state.like}</Text>
         <Text>{this.state.dislike}</Text>
         
         <View style{{flex:1}}>
      <Text:style={{marginTop=50, marginLeft:150}}>
      {this.state.like}
      {this.state.dislike}
      </Text>
      </View>
      </View>

    );
  }
}
//dislikePressed(){
  //var dislike=db.ref('Rating/'+'/')
  //dislike.update({
    //'dislikePressed': 1
  //})
//}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  BuzzerScreen : BuzzerScreen
})

const AppContainer = createAppContainer(AppNavigator)
