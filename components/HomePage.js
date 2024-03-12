import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import Styles from '../Styles'
import SingleArticle from './SingleArticle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from './Api';
import { Picker } from '@react-native-picker/picker';
import ReadMore from './ReadMore';
import { Ionicons } from '@expo/vector-icons';



const HomePage = ({ navigation }) => {
  
  const MaxItems = 10;
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("ca");
  const [language, setLanguage] = useState("en");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formState, setFormState] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [readMoreContent, setReadMoreContent] = useState({});


  const refreshArticles = async () => {
    setLoading(true);
    console.log("Articles Refreshing Process Started...");
    const storageKey = `articles_${country}_${category}_${language}_${MaxItems}`;
    await AsyncStorage.removeItem(storageKey);
    console.log("Old Articles Removed...");
    fetchData()
    setLoading(false);
  };

  const fetchData = async () => {
    try {
      const storageKey = `articles_${country}_${category}_${language}_${MaxItems}`;
      const storedArticles = await AsyncStorage.getItem(storageKey);
      if (storedArticles) {
        setArticles(JSON.parse(storedArticles));
      } else {
      const response = await Api(`/top-headlines?category=${category}&lang=${language}&country=${country}&MAX=${MaxItems}`);
      console.log("New Articles Fetched Success...");
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


  const myForm = () => {
    return (
    <Fragment>
      <View style={Styles.form_container}>
        <View style={Styles.formRow}>
        <Text style={Styles.label}>Category:</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          style={Styles.picker}>
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
        </View>
        

        <View style={Styles.formRow}>
        <Text style={Styles.label}>Country:</Text>
        <Picker
          selectedValue={country}
          onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
          style={Styles.picker}>
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
        </View>

        <View style={Styles.formRow}>
        <Text style={Styles.label}>Language:</Text>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
          style={Styles.picker}>
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
        </View>
        <View style={Styles.formSubmitButton}>
        <TouchableOpacity style={{backgroundColor: '#190028', padding: 10}} title="Submit" onPress={handleFormSubmit}>
          <Text style={{fontWeight:'bold', color:'white', paddingHorizontal: 50, paddingVertical: 5, fontSize: 16}}>Submit</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  )};

  const handleFormSubmit = () => {
    setFormState(false);
    setLoading(true);
    refreshArticles();
  }


  useEffect(() => {
    fetchData()
  }, []);





  function MainContent(articles, renderArticles, refreshArticles){
    return (
        <FlatList 
        style={Styles.articleList}
        data={articles} 
        renderItem={renderArticles}
        keyExtractor={(item, index) => item.title + item.publishedAt + index} 
        // onScroll={handleScroll}
        ScrollEventThrottle={16}
        />
    )
  }
  
  
  const renderArticles = ({ item }) => (
      <SingleArticle
        title={item.title}
        date={item.publishedAt}
        description={item.description}
        content={item.content}
        img={item.image}
        url={item.url}
        setReadMoreContent={setReadMoreContent}
        setShowReadMore={setShowReadMore}
        navigation={navigation}
      />
    );



  return (
    <View style={Styles.mainContainer}>

        {showReadMore && <ReadMore readMoreContent={readMoreContent} showReadMore={showReadMore} setShowReadMore={setShowReadMore} setReadMoreContent={setReadMoreContent}/>} 

        {formState ? myForm() : 
        loading ? loadingView():MainContent(articles, renderArticles, refreshArticles)}

      <Fragment>
          <TouchableOpacity 
            style={[Styles.overlayBaseButton, {bottom:20, right: 20, padding: 10, backgroundColor:'#11001C'}]} 
            onPress={()=>{
                    if (formState){
                      setFormState(false)
                    } else {
                      setFormState(true)
                    }
          }}>
            <Ionicons name="filter-circle-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.overlayBaseButton, {bottom:80, right: 20, padding: 10, backgroundColor:'#11001C'}]} onPress={()=>{
            refreshArticles()
          }}>
            <Ionicons name="refresh" size={30} color="white" />
          </TouchableOpacity>
        </Fragment>

    </View>
  );
};



  function loadingView() {
    return (
      <View style={[Styles.loadingView, {flex:1, flexDirection:'column', height:100, justifyContent:"center", alignItems:"center"}]}>
        <Text style={{textAlign:'center'}}>Loading..</Text>
      </View>
    );
  }












export default HomePage