import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCard from './Component/FlatCard'
import Elvatedcard from './Component/Elvatedcard'
import Weather from './Component/Weather'

export default function Apppro() {
  return (
    <SafeAreaView>
        <ScrollView>
         <FlatCard/>
         <Elvatedcard/>
         <Weather/>
        </ScrollView>
    </SafeAreaView>
  )
}