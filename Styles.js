import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  headerMain: {
    width: "100%",
    height: "160",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    // borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#220135",
    elevation: 5,
  },

  bottom_tabBar: {
    backgroundColor: "#190028",
    borderColor: "#11001C",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },

  loadingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
  },

  mainContainer: {
    flex: 1,
    width:"100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#220135",
    // borderWidth: 2,
  },

  item: {
    width:"100%",
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 15,
    backgroundColor: "#3A015C",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    alignItems: 'center'
  },

  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    paddingTop: 10,
    textAlign: "center",
    lineHeight: 25,
  },

  parentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 20,
  },

  button: {
    width: 200,
    backgroundColor: "#190028",
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "end",
    borderRadius: 5,
    borderColor: "#3A015C",
  },

  buttonText: {
    padding: 2,
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },

  date: {
    color: "wheat",
    fontSize: 14,
    marginBottom: 5,
    paddingHorizontal: 10,
    textAlign: "right",
  },

  articleList: {
    alignContent: "stretch",
    width: "100%",
    backgroundColor: "#190028",
  },

  form_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#3A015C",
    width: "100%",
  },
  formRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    verticalAlign: "middle",
    alignContent: "center",
    alignItems: "flex-start",
    gap: 20,
    minHeight: 80,
    maxHeight: 80,
    backgroundColor: "#3A015C",
    marginVertical: 10,
  },
  label: {
    color: "wheat",
    fontSize: 16,
    maxWidth: 100,
    minWidth: 100,
    minHeight: 80,
  },
  picker: {
    color: "wheat",
    // marginBottom: 20,
    minWidth: 250,
    minHeight: 50,
    maxHeight: 80,
    borderWidth: 2,
    borderColor: "purple",
    backgroundColor: "black",
    color: "white",
    borderRadius: 10,
  },
  formSubmitButton: {
    padding: 20,
    fontWeight: "bold",
    backgroundColor: "3A015C",
    color: "white",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(25, 0, 40, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    backdropFilter: "blur(10px)",
  },
  readMoreContainer: {
    width: "95%",
    height: 550,
    backgroundColor: "#32004F",
    borderRadius: 10,
    padding: 20,
    borderColor: "grey",
    borderWidth: 1,
  },
  description: {
    color: "lightgrey",
    fontSize: 14,
    marginBottom: 10,
    // paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: "left",
  },
  parentContainer1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  parentChild: {
    width: 200,
    padding: 20,
    marginTop: 10,
    backgroundColor: "#190028",
    borderColor: "black",
    borderWidth: 1,
  },

  button1: {
    width: "100px",
    // backgroundColor: "#32004F",
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    // justifyContent: "center",
    // alignItems: "end",
    // borderRadius: 5,
    // borderColor: '#3A015C'
  },

  overlayBaseButton: {
    position: "absolute", // Position the button over the content
    backgroundColor: "blue", // Button background color
    borderRadius: 25, // Circular button
    padding: 15, // Size of the button
    justifyContent: "center",
    alignItems: "center",
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  SinglePost_item: {
    flex: 1,
    // padding: 10,
    backgroundColor: "#3A015C",
    position: "relative",
  },
  SinglePost_SinglePost_image: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  SinglePost_textContainer: {
    paddingVertical: 10,
    flex: 1,
  },
  SinglePost_title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 5,
    paddingTop: 1,
    textAlign: "center",
    lineHeight: 25,
  },
  SinglePost_date: {
    color: "wheat",
    fontSize: 14,
    marginBottom: 5,
    paddingHorizontal: 10,
    textAlign: "right",
  },
  SinglePost_description: {
    color: "lightgrey",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: "center",
    fontFamily: "Roboto",
    lineHeight: 25,
  },
  SinglePost_parentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 20,
  },

  SinglePost_button: {
    width: 200,
    // height: 200,
    backgroundColor: "#220135",
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "end",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "wheat",
  },

  socialButton: {
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    left: 0,
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#11001C",
    paddingVertical: 15,
  },
  // {width:"100%", position:'absolute', bottom:0, left:0, flex:1, flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', backgroundColor:"#11001C", paddingVertical:15}
});

export default Styles;
