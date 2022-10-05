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
  FlatList
} from "react-native";
import { useSelector, } from "react-redux";
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
  loading,
}) {
  //---------- state, veriable and hooks
  const { myUserId } = useSelector(mapState);
  const [visible, setVisible] = React.useState(isVisible);
  const [createPlaylistLoading, setCreatePlaylistLoading] = React.useState(false);
  const [onChangeNumber, setOnChangeNumber] = React.useState('');

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
  const test = () => {
    console.log("myUserId =>", myUserId);
  };

  const addToList = async () => {

    if (onChangeNumber) {

      setCreatePlaylistLoading(true);
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
              setCreatePlaylistLoading(false);
              console.log("We faced error");
            } else {
              setCreatePlaylistLoading(false);
              setOnChangeNumber('')
              Alert.alert("Playlist Successfully Created");
            }
          });
      } catch (err) {
        setCreatePlaylistLoading(false);
        console.log("Error from catch in Add TO List actions", err);
      }
    } else {
      setCreatePlaylistLoading(false);
      alert('Pleas provide a name for the playlist!')
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
            <View
              style={{
                paddingVertical: 20,
              }}
            >
              <TextInput
                style={styles.input}
                onChangeText={text => setOnChangeNumber(text)}
                value={onChangeNumber}
                placeholder="List name"
              // keyboardType="numeric"
              />
              <TouchableOpacity
                onPress={() => {
                  if (!createPlaylistLoading) {

                    addToList();
                  }
                }}
                style={CommonStyles.RowStart}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  {
                    createPlaylistLoading ?
                      <ActivityIndicator
                        style={{ marginRight: 10 }}
                      />
                      :
                      <Image
                        style={{ marginRight: 10 }}
                        source={addIcon}
                        resizeMode="cover"
                      />
                  }
                  <Text style={{ color: "#000" }}>{"Create New Plalist"}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ),
        });
        break;

      case "render_view":
        return renderItem();
        break;

      case "playlist":
        return renderContentLayout({
          title: "Playlists",
          content: (
            <View
              style={{
                paddingVertical: 10,
              }}
            >
              {
                loading ?
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}
                  >
                    <ActivityIndicator />
                  </View>
                  :

                  content?.length >0 ?

                    <FlatList

                      data={content}
                      renderItem={renderPlalist}
                      keyExtractor={item => item.id}

                    />
                    :
                    <View
                      style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}
                    >
                      <Text 
                      style={{color:'#C5C5C5'}}
                      > Plalist Empty
                      </Text>
                    </View>
              }
            </View>
          ),
        });
        break

      default:
        break;
    }
  };

  const renderPlalist = ({ item, index }) => {

    return (
      <TouchableOpacity
        key={index}

        onPress={() => {

          alert('in process ...')

        }}

        style={[CommonStyles.RowStart, { justifyContent: 'flex-start', paddingVertical: 5 }]}
      >

        <Text
          numberOfLines={1}
          style={{ color: "#000", alignSelf: 'flex-start' }}>
          {
            `- ${item.list_name}`
          }
        </Text>
      </TouchableOpacity>
    )
  }

  const renderContentLayout = ({ title, content }) => {
    return (
      <View
        style={{
          flex: render_view_key === 'playlist' ? 0.7 : 0,
        }}
      >
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
      </View>
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
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  centeredView1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  modalView: {
    maxHeight: '70%',
    marginHorizontal: 20,
    marginVertical: 50,
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
