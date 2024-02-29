import React, { useState, useEffect, useRef, Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView, Button, DrawerLayoutAndroid, Platform, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles';

import Api from './Api';
import FormatMyDate from './FormatMyDate';


export default function App() {
  const MAX = 10;
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
  const screenWidth = Dimensions.get('window').width;
  const DRAWER_WIDTH = 300;
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('ca');
  const [language, setLanguage] = useState('en');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const [formState, setFormState] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [readMoreContent, setReadMoreContent] = useState({});


  useEffect(() => {
    fetchData();
  }, []);

  const refreshArticles = async () => {
    setLoading(true);
    console.log("Articles Refreshing Proess Started...");
    const storageKey = `articles_${country}_${category}_${language}_${MAX}`;
    await AsyncStorage.removeItem(storageKey);
    console.log("Old Articles Removed...");
    fetchData();
    setLoading(false);
  };

  
  const renderArticles = ({item}) => <Articles  title={item.title} date={item.publishedAt} description={item.description} content={item.content} img={item.image} url={item.url} />;
  const Articles = ({title, date, description, content, img, url}) => {
    // console.log(`title: ${title}\ndate: ${date}\ndescription: ${description}\ncontent: ${content}\nimg: ${img}\nurl: ${url}`);
    return (
      <View style={styles.item}>
      <TouchableOpacity onPress={() => console.log('Image pressed')}>
        <Image source={{ uri: img }} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{FormatMyDate(date)}</Text>
        {/* <Text style={styles.description}>{description}</Text> */}
        <View style={styles.parentContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {
          console.log('Read More pressed' );
          // console.log(`title: ${title}\ndate: ${date}\ndescription: ${description}\ncontent: ${content}\nimg: ${img}\nurl: ${url}`);
          setShowReadMore(true);
          setReadMoreContent({title, date, description, content, img, url});
          console.log("showReadMore Status: ",showReadMore)
          }}>
        {/* <Button title="Read More..." color="#1E90FF" onPress={() => console.log('Read More pressed')}/> */}
        <Text style={styles.buttonText}>Read More...</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    );
  }


  const readMore = () => {
    // Limit Description content to 300 characters
    const content = readMoreContent.content ? readMoreContent.content.slice(0, 200) : '';
    return (
      <Fragment>
        <View style={styles.overlay}>
          <View style={styles.readMoreContainer}>
          {/* <TouchableOpacity> */}
            <Image source={{ uri: readMoreContent.img }} style={styles.image} resizeMode="cover" />
          {/* </TouchableOpacity> */}
            <Text style={styles.title}>{readMoreContent.title}</Text>
            <Text style={styles.description}>{content}...</Text>
            <View style={styles.parentContainer}>
              <TouchableOpacity style={styles.button} onPress={() => {
                console.log('Read More CLOSED');
                setShowReadMore(false);
                setReadMoreContent({});
                console.log("showReadMore Status: ",showReadMore)
              }}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
              </View>
          </View>

        </View>
      </Fragment>
    );
  }

  const myForm = () => {
    return (
    <Fragment>
      <View style={styles.form_container}>
        <Text style={styles.label}>Category:</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          style={styles.picker}>
          {/* Populate your categories here */}
          <Picker.Item label="General" value="general" />
          <Picker.Item label="World" value="world" />
          <Picker.Item label="Business" value="business" />
          <Picker.Item label="Technology" value="technology" />
          <Picker.Item label="Entertainment" value="entertainment" />
          <Picker.Item label="Sports" value="sports" />
          <Picker.Item label="Science" value="science" />
          <Picker.Item label="Health" value="health" />
        </Picker>

        <Text style={styles.label}>Country:</Text>
        <Picker
          selectedValue={country}
          onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
          style={styles.picker}>
            <Picker.Item label="Australia" value="au" />
            <Picker.Item label="Brazil" value="br" />
            <Picker.Item label="Canada" value="ca" />
            <Picker.Item label="China" value="cn" />
            <Picker.Item label="Egypt" value="eg" />
            <Picker.Item label="France" value="fr" />
            <Picker.Item label="Germany" value="de" />
            <Picker.Item label="Greece" value="gr" />
            <Picker.Item label="Hong Kong" value="hk" />
            <Picker.Item label="India" value="in" />
            <Picker.Item label="Ireland" value="ie" />
            <Picker.Item label="Israel" value="il" />
            <Picker.Item label="Italy" value="it" />
            <Picker.Item label="Japan" value="jp" />
            <Picker.Item label="Netherlands" value="nl" />
            <Picker.Item label="Norway" value="no" /> 
            <Picker.Item label="Pakistan" value="pk" />
            <Picker.Item label="Peru" value="pe" />
            <Picker.Item label="Philippines" value="ph" />
            <Picker.Item label="Portugal" value="pt" />
            <Picker.Item label="Romania" value="ro" />
            <Picker.Item label="Russian Federation" value="ru" />
            <Picker.Item label="Singapore" value="sg" />
            <Picker.Item label="Spain" value="es" />
            <Picker.Item label="Sweden" value="se" />
            <Picker.Item label="Switzerland" value="ch" />
            <Picker.Item label="Taiwan" value="tw" />
            <Picker.Item label="Ukraine" value="ua" />
            <Picker.Item label="United Kingdom" value="gb" /> 
            <Picker.Item label="United States" value="us" /> 
        </Picker>

        <Text style={styles.label}>Language:</Text>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Arabic" value="ar" />
          <Picker.Item label="Chinese" value="zh" />
          <Picker.Item label="Dutch" value="nl" />
          <Picker.Item label="English" value="en" />
          <Picker.Item label="French" value="fr" />
          <Picker.Item label="German" value="de" />
          <Picker.Item label="Greek" value="el" />
          <Picker.Item label="Hebrew" value="he" />
          <Picker.Item label="Hindi" value="hi" /> 
          <Picker.Item label="Italian" value="it" />
          <Picker.Item label="Japanese" value="ja" />
          <Picker.Item label="Malayalam" value="ml" />
          <Picker.Item label="Marathi" value="mr" />
          <Picker.Item label="Norwegian" value="no" />
          <Picker.Item label="Portuguese" value="pt" />
          <Picker.Item label="Romanian" value="ro" />
          <Picker.Item label="Russian" value="ru" />
          <Picker.Item label="Spanish" value="es" />
          <Picker.Item label="Swedish" value="sv" />
          <Picker.Item label="Tamil" value="ta" />
          <Picker.Item label="Telugu" value="te" />
          <Picker.Item label="Ukrainian" value="uk" />

        </Picker>

        <Button title="Submit" onPress={handleFormSubmit} />
      </View>
    </Fragment>
  )};


  const handleFormSubmit = () => {
    setFormState(false);
    setLoading(true);
    refreshArticles();
  }


  const fetchData = async () => {
    try {
      const storageKey = `articles_${country}_${category}_${language}_${MAX}`;
      const storedArticles = await AsyncStorage.getItem(storageKey);
      if (storedArticles) {
        setArticles(JSON.parse(storedArticles));
      } else {
      const response = await Api(`/top-headlines?category=${category}&lang=${language}&country=${country}&MAX=${MAX}`);
      console.log("New Articles Fetched Successed...");
      await AsyncStorage.setItem(storageKey, JSON.stringify(response.articles));
      setArticles(response.articles);
      console.log("Article stored in AsyncStorage...");
      console.log("Article set in state...")
      }
      // console.log(articles)
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const drawer = useRef(null);

  const CustomButton = ({ title, onPress, color }) => (
    <TouchableOpacity style={[styles.nav_button, { backgroundColor: color }]} onPress={onPress} >
      <Text style={styles.nav_buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  const navigationView = () => (
    <>
      <ScrollView style={{ backgroundColor: 'black', }} keyboardDismissMode="interactive" >
        <View style={[styles.container, styles.navigationContainer, { marginTop: statusBarHeight, flex: 1 }]}>
          <View style={{height:180, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={[styles.mylogo]} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2919/2919906.png", }} />
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold', paddingBottom: 10}}>Welcome Back,</Text>
          </View>
          <View style={{ flex: 1, padding: 10, width: screenWidth-(30*screenWidth/100)}}>
            <CustomButton title="Home" color="#0088cc"/>
            <CustomButton title="Top News" color="#0088cc"/>
            <CustomButton title="Latest News" color="#0088cc"/>
            <CustomButton title="About App" color="#0088cc"/>
          </View>
        </View>
      </ScrollView>

      <View View style={{position: 'absolute', bottom: 10, left: 0, right: 0, padding: 10,}}>
        <CustomButton title="Close drawer" color="#0088cc" onPress={() => drawer.current.closeDrawer()}/>
      </View>

    </>
  );
  let scrollTimeout;
  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1500);
  };

  return (
    <Fragment>

    <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    <SafeAreaView style={styles.safeArea}>
    <DrawerLayoutAndroid ref={drawer} drawerWidth={DRAWER_WIDTH} drawerPosition='left'
      renderNavigationView={navigationView}>
        {showReadMore && readMore()}

      <View style={styles.container}>
        {formState ? myForm() : 
        loading ? loadingView():mainContent(articles, renderArticles, refreshArticles, handleScroll, drawer)}
        </View>
        
        {!isScrolling && 
        <Fragment>
          <TouchableOpacity style={[styles.overlayBaseButton, {bottom:20, right: 20, padding: 10, backgroundColor:'black'}]} onPress={()=>{
            if (formState){
              setFormState(false)
            } else {
              setFormState(true)
            }
          }}>
            <Ionicons name="filter-circle-outline" size={30} color="white" />
          </TouchableOpacity>
        </Fragment>}
      </DrawerLayoutAndroid>
      </SafeAreaView>
    </Fragment>
  );
}
// ---------------   APP FUNCTION END  ---------------



function mainContent(articles, renderArticles, refreshArticles, handleScroll, drawer){
  const header_logo = () => (
        <View style={styles.logoContainer_parent}>
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={() => console.log('LOGO pressed')}>
            <Image source={require('./news app logo.png')} style={styles.logo} resizeMode="cover" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.overlayBaseButton, {top:"30%", left: 10, padding: 15, zIndex: 1,}]} onPress={()=> drawer.current.openDrawer()}>
            <Ionicons name="menu" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.overlayBaseButton, {top:"30%", right: 10, padding: 10}]} onPress={refreshArticles}>
            <Ionicons name="refresh" size={25} color="white" />
          </TouchableOpacity>
        </View>
  );
  return (
      <FlatList 
      style={styles.articleList}
      data={articles} 
      renderItem={renderArticles}
      keyExtractor={(item, index) => item.title + item.publishedAt + index} 
      ListHeaderComponent={header_logo}
      onScroll={handleScroll}
      ScrollEventThrottle={16}
      />
  )
}



function loadingView() {
  console.log("LoadingView Function...")
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center'}}>Loading...</Text>
    </View>
  );
}


