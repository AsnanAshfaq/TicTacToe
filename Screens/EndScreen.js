import React from 'react';
import { Text, View,TouchableOpacity,StyleSheet, Dimensions,Image,ImageBackground,StatusBar } from 'react-native';
export default function EndScreen({route,navigation}) {
    const {winner,X,O}=route.params;
    return (
        <View style={styles.containter}>
            <StatusBar/>
            <View>
                <Image style={styles.image} source={require('../assets/Header.png')} />
            </View> 
            <View style={styles.ResultContainer}>
                {
                    winner=='N'?<Text style={styles.result}>D R A W</Text>:<View>
                    
                    <Text style={styles.winner}>P L A Y E R    ' {winner} '</Text><Text style={styles.result}>W I N N E R</Text></View>
                }
            </View>
            <View style={styles.DetailsContainer}>
                <Text style={styles.DetailsText}>X  :  {winner=='X'?<Text style={{color:'#fde359'}}> {X+1} </Text>:<Text style={{color:'#fde359'}}> {X} </Text>}</Text>
                <Text style={styles.DetailsText}>O  :  {winner=='O'?<Text style={{color:'#fde359'}}> {O+1} </Text>:<Text style={{color:'#fde359'}}> {O} </Text>}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button}  onPress={()=>{navigation.navigate("TicTacToe")}}>
                    <Text style={styles.buttonText}>P L A Y   A G A I N</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={()=>{navigation.navigate("StartScreen")}}>
                    <Text style={styles.buttonText}>M A I N   M E N U</Text>
                </TouchableOpacity>
            </View>

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
    button:{
      width:Dimensions.get('screen').width-100,
    //   borderWidth:1,
      padding:10,
      alignItems:'center',
      borderRadius:30,
      backgroundColor:"#eb5569",
      borderWidth:1,
      marginTop:10


    },
    buttonText:{
      fontSize:25,
      fontFamily:"sans-serif-condensed",
      fontWeight:"bold",
      color:"#fee45a",
      textShadowColor:"black",
      textShadowRadius:4
    },
    DetailsContainer:{
        // borderWidth:1,
        width:Dimensions.get('screen').width,
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:25,
        // marginBottom:Dimensions.get('screen').width/4
    },
    DetailsText:{
        padding:12,
        borderWidth:1,
        backgroundColor:'#7adefb',
        width:'30%',
        textAlign:'center',
        fontSize:24,
        // borderBottomColor:'#fde359',
        borderBottomWidth:5,
        borderRadius:10,
        color:'#e95367',
        textShadowRadius:5,
        textShadowColor:'black',
        fontWeight:'bold'
    },
    ResultContainer:{
        alignItems:'center',
        // backgroundColor:'white',
        width:'100%'
    },
    result:{
        fontWeight:'bold',
        fontSize:30,
        color:"#fee45a",
        textShadowColor:"white",
        textShadowRadius:10,
        alignSelf:'center'
    },
    winner:{
        color:'#e95367',
        alignSelf:'center',
        fontSize:42,
        textShadowColor:"white",
        textShadowRadius:10,
    }
  }
);

