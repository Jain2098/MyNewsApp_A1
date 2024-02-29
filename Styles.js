import { StyleSheet, Dimensions } from "react-native";

const halfScreenWidth = Dimensions.get("window").width / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    paddingTop: 40,
    backgroundColor: "#e9ecf0",
    paddingHorizontal: 0,
    // padding: 8,
    // marginTop: 16,
  },
  headingH1: {
    color: "#333",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
    // width: '100vh',
    // width: '100%',
    backgroundColor: "lightblue",
    // paddingVertical: 10
    padding: 10,
  },
  articleList: {
    alignContent: "stretch",
    width: "100%",
    backgroundColor: "darkgray",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "transparent",
  },
  item: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  logoContainer: {
    // width: "100vh",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  logoContainer_parent: {
    width: "100vh",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    // margin: 10,
    backgroundColor: "#519d99",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  textContainer: {
    paddingVertical: 10,
  },
  title: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 1,
  },
  date: {
    color: "#666",
    fontSize: 14,
    marginBottom: 5,
    paddingHorizontal: 10,
    textAlign: "right",
  },
  description: {
    color: "#333",
    fontSize: 14,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  readMore: {
    fontSize: 14,
    color: "#1E90FF",
  },
  url: {
    fontSize: 12,
    color: "#666",
    textDecorationLine: "underline",
  },
  content: {
    fontSize: 12,
    color: "#333",
    marginTop: 5,
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
  button: {
    width: halfScreenWidth > 50 ? halfScreenWidth : 50,
    backgroundColor: "#1E90FF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "end",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  parentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  navigationContainer: { backgroundColor: "black" },
  mylogo: { width: 100, height: 100, margin: 20 },
  nav_button: {
    flex: 1,
    alignSelf: "stretch",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "flex-start",
  },
  nav_buttonText: {
    fontSize: 15,
    color: "white",
  },
  form_container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    marginBottom: 20,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  readMoreContainer: {
    width: "90%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
});

export default styles;
