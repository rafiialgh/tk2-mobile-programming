import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import BarHeader from '../../components/BarHeader'
import CatalogImage from '../../components/CatalogImage'

export default function HomePage() {
  const imageData = [
    { source: require('../../assets/4.jpg'), text: 'Picture 1' },
    { source: require('../../assets/5.jpg'), text: 'Picture 2' },
    { source: require('../../assets/8.jpeg'), text: 'Picture 3' },
  ]

  return (
    <View style={styles.container}>
      <BarHeader />
      <ScrollView >
        <CatalogImage imageData={imageData} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})
