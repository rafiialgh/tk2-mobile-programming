import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function CatalogImage({ imageData }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {imageData.map((item, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image style={styles.image} source={item.source} />
            <Text style={styles.imageText}>{item.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  imageContainer: {
    width: '100%',
  },
  imageWrapper: {
    paddingBottom: 1,
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
  imageText: {
    padding: 10,
    fontSize: 15,
    fontWeight: '500',
    color: 'black'
  },
})
