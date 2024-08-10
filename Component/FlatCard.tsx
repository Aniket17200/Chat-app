import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
           <View style={[styles.card,styles.cardone]}>
               <Text>Red</Text>
          </View>
          <View style={[styles.card,styles.cardtwo]}>
               <Text>Green</Text>
           </View>
           <View style={[styles.card,styles.cardthre]}>
                <Text>Blue</Text>
           </View>
      </View>
    </View>
  )
}

const styles =StyleSheet.create({
    headingText :{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container :{
        flex:1,
        flexDirection:'row',
        padding:8,

    },
    card :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
    },
    cardone :{
        backgroundColor:'#EF5354',

    },
    cardtwo : {
          backgroundColor:'#50DBB4'
    },
    cardthre :{
        backgroundColor:'#5DA3FA'
    },


})