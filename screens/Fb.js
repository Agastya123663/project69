import React from 'react';
import {  Text, View } from 'react-native';

export default class Fb extends React.Component{
   render(){
       return(
           <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#6642f5"}}>
               <Text style={{fontWeight:"bold",fontSize:30,color:"#42e3f5",marginTop:-120}}>Facebook</Text>
               <Text style={{marginTop:-500,fontWeight:"bold",fontSize:45,color:"#45f542"}}>Buzz App</Text>
           </View>
       )
   }
}