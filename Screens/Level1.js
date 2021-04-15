import React,{useState,useEffect}from 'react';
import { Text, View,TouchableOpacity,StyleSheet, Dimensions,Image,ImageBackground,StatusBar } from 'react-native';
export default function TicTacToe({navigation}) {
    const [Tiles,setTiles]=useState([["","",""],
                                    ["","",""],
                                    ["","",""]]);
const [turn,setTurn]=useState('X');
const [winner,setWinner]=useState('');
const [XScore,setXScore]=useState(0);
const [OScore,setOScore]=useState(0);

useEffect(()=>{updateWinner();},[winner]);
const MarkTiles=(a,b)=>{
    var arr=Tiles;
    if(Tiles[a][b]!='X' && Tiles[a][b]!='O')
    {
        if(turn=='X')
        {
            arr[a][b]='X';
            setTiles(arr);
            setTurn('O')
            // alert('if');
        }
        else{
            arr[a][b]='O';
            setTiles(arr);
            setTurn('X');
        }
    }
    getWinner();

}


const updateWinner=()=>{
    if(winner!="")
    {
        if(winner==='X')
        {
        setXScore(XScore+1);
        }
        else if(winner==='O')
        {
        setOScore(OScore+1);
        }
        setTurn('X');
        setTiles([["","",""],
                  ["","",""],
                  ["","",""]]);
        navigation.navigate('EndScreen',{winner : winner, X : XScore, O : OScore});
        setWinner("")
    }
}

const getWinner=()=>{
    if(Tiles[0][0]!="")
    {
        if(Tiles[0][0]===Tiles[0][1] && Tiles[0][0]===Tiles[0][2])
        {
          setWinner(Tiles[0][0]);
        }
        else if(Tiles[0][0]===Tiles[1][0] && Tiles[0][0]===Tiles[2][0] )
        {
         setWinner(Tiles[0][0]);
        }
        else if(Tiles[0][0]===Tiles[1][1] && Tiles[0][0]===Tiles[2][2])
        {
         setWinner(Tiles[0][0]);
        }
        else
        {
          drawGame();
        } 
    }
    if(Tiles[1][1]!="")
    {
        if(Tiles[1][1]===Tiles[1][0] && Tiles[1][1]===Tiles[1][2])
        {
            setWinner(Tiles[1][1]);
        }
        else if(Tiles[1][1]===Tiles[0][1] && Tiles[1][1]===Tiles[2][1] )
        {
            setWinner(Tiles[1][1]);
        }
        else if(Tiles[1][1]===Tiles[0][2] && Tiles[1][1]===Tiles[2][0] )
        {
            setWinner(Tiles[1][1]);
        }
        else
        {
            drawGame();
        } 
    }
    if(Tiles[2][2]!="")
    {
        if(Tiles[2][2]===Tiles[2][1] && Tiles[2][2]===Tiles[2][0])
        {
            setWinner(Tiles[2][2]);
        }
        else if(Tiles[2][2]===Tiles[1][2] && Tiles[2][2]===Tiles[0][2] )
        {
            setWinner(Tiles[2][2]);
        }
        else
        {
            drawGame();
        } 
    }
}
const drawGame=()=>{
    let count=0;
    for(let i=0;i<3;i++)
        {
        for(let j=0;j<3;j++)
        {
            if(Tiles[i][j]!="")
            {
            count+=1;
            }
        }
    }
    if(count===9)
    {
    setWinner('N');
    }
}
return(
<View style={styles.container}>
    <View style={styles.welcomeTextContainer}>
        <Image source={require('../assets/Header.png')}/>
    </View>
    <View style={styles.DetailsContainer}>
        <Text style={styles.DetailsText}>X  <Text style={{color:'#fde359'}}>:  {XScore}</Text></Text>
        <Text style={styles.DetailsText}>O  :  <Text style={{color:'#fde359'}}>{OScore}</Text></Text>
    </View>
    <View style={styles.ButtonContainer}>
        <View style={styles.ButtonRow}>
            <TouchableOpacity style={styles.Button} onPress={MarkTiles.bind(this,0,0)} >
            <Text style={styles.ButtonText} >{Tiles[0][0]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Button} onPress={MarkTiles.bind(this,0,1)}  >
            <Text style={styles.ButtonText}>{Tiles[0][1]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.Button,{borderRightColor:'black'}]}  onPress={MarkTiles.bind(this,0,2)} >
            <Text style={styles.ButtonText}>{Tiles[0][2]}</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.ButtonRow}> 
            <TouchableOpacity style={styles.Button} onPress={MarkTiles.bind(this,1,0)} >
            <Text style={styles.ButtonText}>{Tiles[1][0]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Button} onPress={MarkTiles.bind(this,1,1)} >
            <Text style={styles.ButtonText}>{Tiles[1][1]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.Button,{borderRightColor:'black'}]} onPress={MarkTiles.bind(this,1,2)} >
            <Text style={styles.ButtonText}>{Tiles[1][2]}</Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.ButtonRow,{borderBottomColor:'black'}]}>
            <TouchableOpacity style={styles.Button} onPress={MarkTiles.bind(this,2,0)} >
                <Text style={styles.ButtonText}>{Tiles[2][0]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Button} onPress={MarkTiles.bind(this,2,1)} >
                <Text style={styles.ButtonText}>{Tiles[2][1]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.Button,{borderRightColor:'black'}]} onPress={MarkTiles.bind(this,2,2)} >
                <Text style={styles.ButtonText}>{Tiles[2][2]}</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.TurnContainer}>
        <Text style={styles.TurnText}>P L A Y E R   :    {turn}</Text>
    </View>
</View>

);
}
const styles=StyleSheet.create(
  {
    container:
    {
        height:Dimensions.get('screen').height,
        width:Dimensions.get('screen').width,
        // justifyContent: 'center',
        backgroundColor:'black',
        alignItems:'center'
    },
    welcomeTextContainer:{
        width:Dimensions.get('screen').width,
        alignItems:'center',
        // marginBottom:Dimensions.get('screen').width/4
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
    ButtonContainer:{
        width:'75%',
        height:Dimensions.get('screen').width,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
    },
    ButtonRow:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        // padding:10,
        borderBottomWidth:5,
        borderBottomColor:'#e95367',
    },
    Button:{
        width:'32%',
        // borderWidth:1,
        height:85,
        borderRightWidth:5,
         borderRightColor:'#e95367',
        // alignItems:'center',
        // backgroundColor:'lightblue',
        padding:25,
    },
    ButtonText:{
        padding:12,
        // borderWidth:1,
        // backgroundColor:'#7adefb',
        // width:'30%',
        textAlign:'center',
        fontSize:24,
        // borderBottomColor:'#fde359',
        // borderBottomWidth:5,
        // borderRadius:10, 
        color:'#fde359',
        textShadowRadius:5,
        textShadowColor:'black',
        fontWeight:'bold'
    },
    TurnContainer:
    {
        backgroundColor:'#e95367',
        alignItems:'center',
        width:Dimensions.get('screen').width-100,
        alignSelf:'center',
        borderRadius:15,
        marginTop:30,
        height:70,
        justifyContent:'center'
    },
    TurnText:
    {
        // color:'#fde359',
        fontSize:25,
        padding:10,
        fontWeight:'bold',
        color:"#fee45a",
      textShadowColor:"black",
      textShadowRadius:4

    }
    // StartButtonContainer:{
    //     // borderWidth:1,
    //     // backgroundColor:'#A13941FF',
    //     width:'100%',
    //     alignItems:'center',
    //     marginTop:30,
    // },
    // StartButton:{
    //     backgroundColor:'#A13941FF',
    //     padding:20,
    //     width:'auto',
    //     alignItems:'center',
    //     borderRadius:30,
    //     marginBottom:10
    // },
    // StartButtonText:{
    //     color:'whitesmoke',
    //     fontSize:16,
    //     fontWeight:'bold',
    //     fontFamily:'monospace'
    // },
   
   
  }
);

