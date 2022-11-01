import { StyleSheet, ScrollView, View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import HeaderRight from "../../../components/HeaderRight";
import HeaderTitle from "../../../components/HeaderTitle";
import HeaderLeft from "../../../components/HeaderLeft";
import { backIcon, drawerIcon } from "../../../constants/Images";
import SongModal from "../../../components/SongModal";

const Songs = ({ navigation, route }) => {
  const {selectedSublimal,sublimalID, fromPlayList,songsID} = route.params
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          iconName1={""}
          iconName2={""}
          iconName3={drawerIcon}
          onPress3={() => navigation.openDrawer()}
        />
      ),
      headerTitle: () => <HeaderTitle title={"Songs"} />,
      headerLeft: () => (
        <HeaderLeft
          text={""}
          iconName={backIcon}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  const fetchSongs = async () => {
    await fetch(
      "http://soundnsoulful.alliedtechnologies.co:8000/v1/api/songs",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.status) {
          var checkData = res.data?.songs
          if(fromPlayList){
            var result = checkData.filter(function(value) {
              if(songsID.indexOf(value.id) !== -1) {
                  return value
              }
          });
          console.log(result,'RESULT')
          setSongs(result)
          } else {
            var result = checkData.map(val => {
              if(val.sublimal == sublimalID) {
                console.log('GOT IT')
              }
            })
          setSongs(checkData)
          }
          // setSongs(result);
        } else {
          const err = "Something went wrong please try again later";
          setError(err);
        }
      })
      .catch((error) => {
        console.error(error);
        const err = "Something went wrong please try again later";
        setError(err);
      });
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  // console.log('----------------------')
  // console.log('songs :', songs)
  // console.log('----------------------')

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {
          error.length > 0 && songs.length === 0 && (
            <Text style={styles.error}>{error}</Text>
          )
        }
        {
          songs?.length > 0 &&
          songs.map((item, index) => (
            <View key={index}>
              <SongModal item={item} index={index} navigation={navigation} songs={songs} />
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
};

export default Songs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  error: {
    textAlign: "center",
    fontSize: 16,
    color: "red",
  },
});
