import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'


export default function Weather() {
   const [city ,setcity]=useState('');
   const[weatherdata,setweatherdata]=useState(null);
   const [forcasrweather,setforcastweather]=useState(null);
 


  return (
    <View style={styles.container}>
      <Text style={styles.headertitle}>Weather</Text>
      <View>
        <TextInput
          placeholder='enter the city'
          style={styles.inputbox}
          onChangeText={city}
        ></TextInput>
      </View>
      <View>
        <Pressable
         style={({pressed})=>[styles.button,
           {
            backgroundColor : pressed ?  '#1e8449' : '#2ecc71',
           },
         ]}
        
        
        >
            <Text style={styles.buttonText} onChangeText>Weather</Text>

        </Pressable>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container : {
        padding :8,
    },
    headertitle :{
        fontSize : 24,
        fontWeight: 'bold',
    },
    inputbox : {
        padding:10,
        margin:4,
        borderRadius :6,
        borderWidth:1,
        borderColor: "#228B22",
    },
    button : {

        padding :10,
        margin:4,
        borderRadius:6,

    },
    buttonText :{
        flex:1,
        color:'white',
        fontSize:17,
        fontWeight:'bold',
        alignItems:'center',
        marginLeft:145,
    }
    

})