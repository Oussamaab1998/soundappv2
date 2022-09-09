//---------- imports

// react
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Modal,
  StyleSheet,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
// third party lib
import { ScrollView } from "react-native-gesture-handler";
import { Portal, Button, Provider } from "react-native-paper";

import { addIcon } from ".././constants/Images";

// styles
import AuthStyles from "../style/AuthStyles";
import CommonStyles from "../style/CommonStyles";
import SpaceStyles from "../style/SpaceStyles";
import TextStyles from "../style/TextStyles";

//---------- component
const mapState = ({ localReducer }) => ({
  myUserId: localReducer.myUserId,
});

function ModalContainer({
  navigation,
  render_view_key,
  content,
  isVisible,
  renderItem,
  hideModal,
}) {
  //---------- state, veriable and hooks
  const { myUserId } = useSelector(mapState);
  const [visible, setVisible] = React.useState(isVisible);

  //---------- life cycle

  useEffect(() => {
    console.log(
      "isVisible :",
      isVisible,
      "key:",
      render_view_key,
      "content :",
      content
    );
    setVisible(isVisible);
  }, [isVisible]);

  //---------- helper: user's actions

  const showModal = () => setVisible(true);
  const addToList = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          list_name: "ouss",
          user: `${myUserId}`,
          songs: ["2"],
        }),
      };
      await fetch(
        "http://soundnsoulful.alliedtechnologies.co:8000/v1/api/playlist",
        requestOptions
      )
        .then((response) => response.json())
        .then((response) => {
          console.log("Add To List :", response.data);
          if (response.data.errors) {
            console.log("We faced error");
          } else {
            Alert.alert("Playlist Successfully Created");
          }
        });
    } catch (err) {
      console.log("Error from catch in Add TO List actions", err);
    }
  };
  const renderContent = (params) => {
    switch (params) {
      case "affirmations":
        return renderContentLayout({
          title: "Affirmations",
          content: <Text style={{ color: "#000" }}>{content}</Text>,
        });
        break;

      case "save":
        return renderContentLayout({
          title: "Playlists",
          content: (
            <TouchableOpacity
              onPress={() => {
                addToList();
              }}
              style={CommonStyles.RowStart}
            >
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="List name"
                keyboardType="numeric"
              />
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Image
                  style={{ marginRight: 10 }}
                  source={addIcon}
                  resizeMode="cover"
                />
                <Text style={{ color: "#000" }}>{"Create New Plalist"}</Text>
              </View>
            </TouchableOpacity>
          ),
        });
        break;

      case "render_view":
        return renderItem();
        break;

      default:
        break;
    }
  };

  const renderContentLayout = ({ title, content }) => {
    return (
      <React.Fragment>
        <View
          style={[
            CommonStyles.RowSpaceBetween,
            { padding: 10, width: "100%", alignSelf: "flex-start" },
          ]}
        >
          <Text style={[TextStyles.textBold24Black]}>{title}</Text>
        </View>

        <View style={AuthStyles.ModalContentContainer}>{content}</View>

        <View style={[CommonStyles.RowEnd, { padding: 10, width: "100%" }]}>
          <TouchableOpacity
            style={CommonStyles.GrayBtn}
            onPress={() => {
              hideModal();
            }}
          >
            <Text style={TextStyles.textSegoe18White}>Close</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  };
  //---------- return main view

  console.log("visible", visible);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        hideModal();
        setVisible(false);
      }}
    >
      <View style={styles.centeredView1}>
        <View style={styles.modalView}>{renderContent(render_view_key)}</View>
      </View>
    </Modal>
  );
}

//---------- export component

export default ModalContainer;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: "absolute",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  centeredView1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
