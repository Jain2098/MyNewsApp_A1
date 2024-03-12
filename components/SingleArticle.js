import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Styles from "../Styles"
import FormatMyDate from './FormatMyDate'

const SingleArticle = ({title, date, description, content, img, url, setShowReadMore, setReadMoreContent, showReadMore, navigation}) => {
  const f_date = FormatMyDate(date);
  return (
    <View style={Styles.item}>
      <TouchableOpacity onPress={() => {
          // setShowReadMore(true);
          // setReadMoreContent({title, date, description, content, img, url});
          navigation.navigate('Single', {
            title: {title},
            f_date: {f_date},
            description: {description},
            content: {content},
            img: {img},
            url: {url}
          })

          }}>
        <Image source={{ uri: img }} style={Styles.image} resizeMode="cover" />
      </TouchableOpacity>
      <View style={Styles.textContainer}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.date}>{f_date}</Text>

        <View style={Styles.parentContainer}>
        <TouchableOpacity style={Styles.button} onPress={() => {
          // console.log('Read More pressed' );
          // setShowReadMore(true);
          // setReadMoreContent({title, date, description, content, img, url});
          // console.log("showReadMore Status: ",showReadMore)
          navigation.navigate('Single', {
            title: {title},
            f_date: {f_date},
            description: {description},
            content: {content},
            img: {img},
            url: {url}
          })
          }} 
          onLongPress={()=>{
          console.log('Read More Long Pressed' );
          setShowReadMore(true);
          setReadMoreContent({title, date, description, content, img, url});
          }}>
        <Text style={Styles.buttonText}>Read More...</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SingleArticle