import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { Fragment } from 'react'
import Styles from '../Styles';

const ReadMore = ({readMoreContent, showReadMore, setShowReadMore, setReadMoreContent}) => {
    const content = readMoreContent.content ? readMoreContent.content.slice(0, 220) : '';

  return (
    <Fragment>
    <View style={Styles.overlay}>
      <View style={Styles.readMoreContainer}>
        <Image source={{ uri: readMoreContent.img }} style={Styles.image} resizeMode="cover" />
        <Text style={Styles.title}>{readMoreContent.title}</Text>
        <Text style={Styles.description}>{content}...</Text>


        <View style={Styles.parentContainer1}>
            <View style={Styles.parentChild}>
                <TouchableOpacity style={Styles.button1} onPress={() => {
                    console.log('Read More CLOSED');
                    setShowReadMore(false);
                    setReadMoreContent({});
                    console.log("showReadMore Status: ",showReadMore)
                }}>
                <Text style={Styles.buttonText}>Close</Text>
                </TouchableOpacity>
            </View>
          </View>
      </View>

    </View>
  </Fragment>
  )
}

export default ReadMore

