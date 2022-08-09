import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const AuthStyles = StyleSheet.create({
  errorsLogin: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  errorsLogintxt: {
    color: "red",
    textAlign: "center",
  },
  authContainer: {
    flex: 1,

    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  textInputView: {
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 10
  },
  smallButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,

    alignItems: "center",
    justifyContent: "center",

    alignSelf: "center",
    backgroundColor: "#000",
  },
  largeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#000",
  },
  centerImageView: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  deviceWidth: {
    width: width,
  },
  deviceHeight: {
    height: height,
  },

  ContentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  // modal
  ModalCenteredView: {
    justifyContent: "center",
    alignItems: "center",
    flex:1,
  },
  ModalScrollContainer: {
    backgroundColor: '#fff',
    // height: '100%',
    // width: '100%'
  },
  ModalContentContainer: {
    width: '100%',
    borderBottomColor:'#dee2e6',
    borderTopColor:'#dee2e6',
    borderBottomWidth:1,
    borderTopWidth:1,
    minWidth:width-100,
    padding:10
  },
  
  

});

export default AuthStyles;
