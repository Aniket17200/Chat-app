import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function Elvatedcard() {
  return (
    <View>
      <Text style={styles.headingText}>Elvatedcard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElvater]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElvater]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card,styles.cardElvater]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElvater]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElvater]}>
            <Text>mor...</Text>
        </View>
        <View style={[styles.card,styles.cardElvater]}>
            <Text>hi</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    headingText :{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container:{
         padding:0,

    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center', 
        width:100,
        height:100,
        borderRadius:4,
        margin:8,

    },
    cardElvater :{
       backgroundColor:'#CAD5E2',
       elevation:4,
       shadowOffset:{
         width:1,
         height:1,
       },
       shadowColor:'#333',
       shadowOpacity:0.4,
       shadowRadius:2,
    },
})