import React from 'react';
import { Text, View,TouchableOpacity,StyleSheet, Dimensions,Image,ImageBackground,StatusBar } from 'react-native';
export default function StartScreen({navigation}) {
  return (
    <View style={styles.containter}>
        <StatusBar/>
        <View>
        <Image style={styles.image} source={require('../assets/logo.png')} />
        </View> 
        <TouchableOpacity style={styles.button}  onPress={()=>{navigation.navigate("TicTacToe")}}>
            <Text style={styles.buttonText}>P L A Y</Text>
        </TouchableOpacity>
    </View>
    
    
  );
}
const styles=StyleSheet.create(
  {
    containter:{
      width:Dimensions.get("screen").width,
      height:Dimensions.get("screen").height,
      // marginTop:Constants.statusBarHeight,
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:'black'
    },
    image:{
    //   height:Dimensions.get("screen").height/2,
    //   width:Dimensions.get("screen").width,
    },
    button:{
      width:'30%',
    //   borderWidth:1,
      padding:10,
      alignItems:'center',
      borderRadius:30,
      backgroundColor:"#eb5569",
      borderWidth:1,


    },
    buttonText:{
      fontSize:25,
      fontFamily:"sans-serif-condensed",
      fontWeight:"bold",
      color:"#fee45a",
      textShadowColor:"black",
      textShadowRadius:4
    }
  }
);

