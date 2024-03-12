import { View, Text, TouchableOpacity, Image, Linking, Button, Share } from 'react-native'
import React from 'react'
import Styles from "../Styles"
import { Ionicons } from '@expo/vector-icons';

const SinglePost = ({route, navigation}) => {
    const {title, f_date, description, content, img, url} = route.params;
    // console.log(title, f_date, description, content, img, url)

    const openURL = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
      }

      const onShare = async () => {
        try {
            await Share.share({
                message: `"${title.title}"\n=>${description.description}\n\nRead more at: ${url.url}`,
                url: url,
            });
        } catch (error) {
            console.error('An error occurred while trying to share', error.message);
        }
    };

  return (
    <View style={Styles.SinglePost_item}>
      <TouchableOpacity>
        <Image source={{ uri: img.img }} style={Styles.image} resizeMode="cover" />
      </TouchableOpacity>
      <View style={Styles.SinglePost_textContainer}>
        <Text style={Styles.SinglePost_title}>{title.title}</Text>
        <Text style={Styles.SinglePost_date}>{f_date.f_date}</Text>
        <Text style={Styles.SinglePost_description}>{description.description}</Text>




        <View style={Styles.SinglePost_parentContainer}>
        <TouchableOpacity style={Styles.SinglePost_button} onPress={()=>{openURL(url.url)}}>
        <Text style={Styles.buttonText}>Read Full Article...</Text>
        </TouchableOpacity>
        </View>



      </View>
      <TouchableOpacity style={Styles.socialButton} onPress={onShare}>
        <Ionicons name='share-social' size={30} color={'#316FF6'} onPress={onShare}/>
        {/* <Ionicons name='logo-twitter' size={30} color={'#1DA1F2'} />
        <Ionicons name='logo-whatsapp' size={30} color={'#25D366'} />
        <Ionicons name='logo-instagram' size={30} color={'#E1306C'} /> */}

        </TouchableOpacity>
    </View>
  )
}

export default SinglePost