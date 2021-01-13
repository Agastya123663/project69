import React from 'react';
import {  Text, View ,Image} from 'react-native';

export default class In extends React.Component{
   render(){
       return(
           <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f542b9"}}>
               <Text style={{fontWeight:"bold",fontSize:30,color:"purple",marginTop:-120}}>Instagram </Text>
               <Text style={{marginTop:-500,fontWeight:"bold",fontSize:45,color:"#45f542"}}>Buzz App</Text>
               
           </View>
       )
   }
}