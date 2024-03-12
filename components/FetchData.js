
// import Api from './Api';

// async function FetchData (country, category, language, MaxItems, setLoading, setArticles){
//     try {
//         console.log("........")
//       const storageKey = `articles_${country}_${category}_${language}_${MaxItems}`;
//       const storedArticles = await AsyncStorage.getItem(storageKey);
//       if (storedArticles) {
//         setArticles(JSON.parse(storedArticles));
//       } else {
//       const response = await Api(`/top-headlines?category=${category}&lang=${language}&country=${country}&MAX=${MaxItems}`);
//       console.log("New Articles Fetched Succeeded...");
//       await AsyncStorage.setItem(storageKey, JSON.stringify(response.articles));
//       setArticles(response.articles);
//       console.log("Article stored in AsyncStorage...");
//       console.log("Article set in state...")
//       }
//       // console.log(articles)
      
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }

// export default FetchData