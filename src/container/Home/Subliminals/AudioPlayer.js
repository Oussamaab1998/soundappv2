//---------- imports
// react
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

// third party lib
import Sound from "react-native-sound";

// headers
import HeaderRight from "../../../components/HeaderRight";
import HeaderTitle from "../../../components/HeaderTitle";
import HeaderLeft from "../../../components/HeaderLeft";

import {
  amplifyIcon,
  backIcon,
  drawerIcon,
  endIcon,
  more,
  pause,
  playIcon,
  skiptoStart,
} from "../../../constants/Images";

// styles
import CommonStyles from "../../../style/CommonStyles";
import SpaceStyles from "../../../style/SpaceStyles";

const songs1 = [
  {
    id: 1,
    album: [
      {
        id: 1,
        name: "Face Sublimal Songs",
        thumbnail:
          "http://soundnsoulful.alliedtechnologies.co:8000/media/album/aibackground.jpg",
      },
    ],
    genre: {
      id: 1,
      name: "Beauty Sublimals Songs",
      thumbnail:
        "http://soundnsoulful.alliedtechnologies.co:8000/media/genres/song.jpg",
    },
    url: "http://soundnsoulful.alliedtechnologies.co:8000/media/songs/2022/07/28/wvd7x8ZrxGBZ9AsLdojX4itfFDSI2b.mp3",
    audio_id: "sG6sIjXlHWV2iqOu",
    title: "111 Clear Skin and Birds",
    description: "A sublimal that makes life great",
    thumbnail:
      "http://soundnsoulful.alliedtechnologies.co:8000/media/thumbnails/The_Creation_v2.minified.jpg",
    song: "http://soundnsoulful.alliedtechnologies.co:8000/media/songs/2022/07/28/wvd7x8ZrxGBZ9AsLdojX4itfFDSI2b.mp3",
    size: 30,
    playtime: "0.00",
    type: "single",
    price: "0.00",
    featured: true,
    created_at: "2022-07-28T16:58:38Z",
    affirmations_song:
      "*develop an amazing personality\r\n    *attract loyal & supportive friends easily\r\n    *be extremely funny and witty\r\n    *make others laugh all the time\r\n    *have total knowledge of all subjects and world events\r\n    make conversation easily\r\n    always know the perfect thing to say\r\n    be the best listener\r\n    be extremely kind & empathetic\r\n    give the best advice to others\r\n    make others gravitate to you & want to talk with you\r\n    get invited to all places and events\r\n    speak perfectly clearly & with flawless pronunciation\r\n    become an optimistic and positive-minded person\r\n    love yourself completely\r\n    feel a deep sense of confidence in yourself\r\n    strike up conversations easily\r\n    attract your crush\r\n    have an amazing connection with your crush\r\n    clearly & eloquently express your ideas\r\n    become extremely lucky, wealthy & successful",
    user: 1,
  },
  {
    id: 2,
    album: [
      {
        id: 1,
        name: "Face Sublimal Songs",
        thumbnail:
          "http://soundnsoulful.alliedtechnologies.co:8000/media/album/aibackground.jpg",
      },
    ],
    genre: {
      id: 2,
      name: "Beauty Sublimals Songs",
      thumbnail:
        "http://soundnsoulful.alliedtechnologies.co:8000/media/genres/song.jpg",
    },
    url: "http://soundnsoulful.alliedtechnologies.co:8000/media/songs/2022/07/28/wvd7x8ZrxGBZ9AsLdojX4itfFDSI2b.mp3",
    audio_id: "sG6sIjXlHWV2iqOu",
    title: "222 Clear Skin and Birds",
    description: "A sublimal that makes life great",
    thumbnail:
      "http://soundnsoulful.alliedtechnologies.co:8000/media/thumbnails/The_Creation_v2.minified.jpg",
    song: "http://soundnsoulful.alliedtechnologies.co:8000/media/songs/2022/07/28/wvd7x8ZrxGBZ9AsLdojX4itfFDSI2b.mp3",
    size: 30,
    playtime: "0.00",
    type: "single",
    price: "0.00",
    featured: true,
    created_at: "2022-07-28T16:58:38Z",
    affirmations_song:
      "*develop an amazing personality\r\n    *attract loyal & supportive friends easily\r\n    *be extremely funny and witty\r\n    *make others laugh all the time\r\n    *have total knowledge of all subjects and world events\r\n    make conversation easily\r\n    always know the perfect thing to say\r\n    be the best listener\r\n    be extremely kind & empathetic\r\n    give the best advice to others\r\n    make others gravitate to you & want to talk with you\r\n    get invited to all places and events\r\n    speak perfectly clearly & with flawless pronunciation\r\n    become an optimistic and positive-minded person\r\n    love yourself completely\r\n    feel a deep sense of confidence in yourself\r\n    strike up conversations easily\r\n    attract your crush\r\n    have an amazing connection with your crush\r\n    clearly & eloquently express your ideas\r\n    become extremely lucky, wealthy & successful",
    user: 1,
  },
  {
    id: 3,
    album: [
      {
        id: 1,
        name: "Face Sublimal Songs",
        thumbnail:
          "http://soundnsoulful.alliedtechnologies.co:8000/media/album/aibackground.jpg",
      },
    ],
    genre: {
      id: 1,
      name: "Beauty Sublimals Songs",
      thumbnail:
        "http://soundnsoulful.alliedtechnologies.co:8000/media/genres/song.jpg",
    },
    url: "http://soundnsoulful.alliedtechnologies.co:8000/media/songs/2022/07/28/wvd7x8ZrxGBZ9AsLdojX4itfFDSI2b.mp3",
    audio_id: "sG6sIjXlHWV2iqOu",
    title: "333 Clear Skin and Birds",
    description: "A sublimal that makes life great",
    thumbnail:
      "http://soundnsoulful.alliedtechnologies.co:8000/media/thumbnails/The_Creation_v2.minified.jpg",
    song: "http://soundnsoulful.alliedtechnologies.co:8000/media/songs/2022/07/28/wvd7x8ZrxGBZ9AsLdojX4itfFDSI2b.mp3",
    size: 30,
    playtime: "0.00",
    type: "single",
    price: "0.00",
    featured: true,
    created_at: "2022-07-28T16:58:38Z",
    affirmations_song:
      "*develop an amazing personality\r\n    *attract loyal & supportive friends easily\r\n    *be extremely funny and witty\r\n    *make others laugh all the time\r\n    *have total knowledge of all subjects and world events\r\n    make conversation easily\r\n    always know the perfect thing to say\r\n    be the best listener\r\n    be extremely kind & empathetic\r\n    give the best advice to others\r\n    make others gravitate to you & want to talk with you\r\n    get invited to all places and events\r\n    speak perfectly clearly & with flawless pronunciation\r\n    become an optimistic and positive-minded person\r\n    love yourself completely\r\n    feel a deep sense of confidence in yourself\r\n    strike up conversations easily\r\n    attract your crush\r\n    have an amazing connection with your crush\r\n    clearly & eloquently express your ideas\r\n    become extremely lucky, wealthy & successful",
    user: 1,
  },
  {
    id: 4,
    album: [
      {
        id: 1,
        name: "Face Sublimal Songs",
        thumbnail:
          "http://soundnsoulful.alliedtechnologies.co:8000/media/album/aibackground.jpg",
      },
    ],
    genre: {
      id: 1,
      name: "Beauty Sublimals Songs",
      thumbnail:
        "http://soundnsoulful.alliedtechnologies.co:8000/media/genres/song.jpg",
    },
    url: "http://soundnsoulful.alliedtechnologies.co:8000/media/songs/2022/07/28/wvd7x8ZrxGBZ9AsLdojX4itfFDSI2b.mp3",
    audio_id: "sG6sIjXlHWV2iqOu",
    title: "444 Clear Skin and Birds",
    description: "A sublimal that makes life great",
    thumbnail:
      "http://soundnsoulful.alliedtechnologies.co:8000/media/thumbnails/The_Creation_v2.minified.jpg",
    song: "http://soundnsoulful.alliedtechnologies.co:8000/media/songs/2022/07/28/wvd7x8ZrxGBZ9AsLdojX4itfFDSI2b.mp3",
    size: 30,
    playtime: "0.00",
    type: "single",
    price: "0.00",
    featured: true,
    created_at: "2022-07-28T16:58:38Z",
    affirmations_song:
      "*develop an amazing personality\r\n    *attract loyal & supportive friends easily\r\n    *be extremely funny and witty\r\n    *make others laugh all the time\r\n    *have total knowledge of all subjects and world events\r\n    make conversation easily\r\n    always know the perfect thing to say\r\n    be the best listener\r\n    be extremely kind & empathetic\r\n    give the best advice to others\r\n    make others gravitate to you & want to talk with you\r\n    get invited to all places and events\r\n    speak perfectly clearly & with flawless pronunciation\r\n    become an optimistic and positive-minded person\r\n    love yourself completely\r\n    feel a deep sense of confidence in yourself\r\n    strike up conversations easily\r\n    attract your crush\r\n    have an amazing connection with your crush\r\n    clearly & eloquently express your ideas\r\n    become extremely lucky, wealthy & successful",
    user: 1,
  },
];

//---------- componets
const AudioPlayer = ({ navigation, route }) => {
  //---------- state and params
  const { item, songs } = route.params;

  // state
  const [currentSong, setCurrentSong] = useState(item);
  const [modalVisible, setModalVisible] = useState(false);
  const [songVar, setSongVar] = useState(null);
  const [songLength, setSongLength] = useState(0);
  const [songStatus, setSongStatus] = useState(false);
  const [songCS, setSongCS] = useState(0);
  const [songsSameGenre, setSongsSameGenre] = useState([]);

  const fetchSameGenre = async () => {
    let arr = [];
    let i = 0;
    songs.map((song) => {
      i++;
      if (song.genre.id === item.genre.id) arr.push(song);
    });
    setSongsSameGenre(arr);
    // if (songs.length - 1 === i) {
    // }
  };

  useEffect(() => {
    if (songs) fetchSameGenre();
  }, []);

  //---------- life cycles

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
      headerTitle: () => <HeaderTitle title={"Song"} />,
      headerLeft: () => (
        <HeaderLeft
          text={""}
          iconName={backIcon}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  //--------- users actions

  const playSound = (currentSongItem) => {
    if (songVar !== null) pauseSound();
    var whoosh = new Sound(currentSongItem.url, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
      // loaded successfully

      whoosh.getCurrentTime((seconds) => setSongCS(seconds));
      setSongVar(whoosh);
      setSongLength(whoosh.getDuration());
      setSongStatus(true);

      // Play the sound with an onEnd callback
      whoosh.play((success) => {
        if (success) {
          console.log("successfully finished playing");
        } else {
          console.log("playback failed due to audio decoding errors");
        }
      });
    });
  };
  const pauseSound = () => {
    if (songVar !== null) songVar.pause();
    setSongStatus(false);
  };

  //---------- render main view

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.thumbnail1}
              />
              <Text style={styles.modalText}>Title: </Text>
              <Text style={styles.modalText0}>{item.title} </Text>
              <Text style={styles.modalText}>Description: </Text>
              <Text style={styles.modalText0}>{item.description} </Text>
              <Text style={styles.modalText}>Info: </Text>
              <Text style={styles.modalText0}>{item.affrimations_song} </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <View style={styles.conatiner}>
        <View style={styles.header}>
          <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
          <Text style={styles.title2}>{item.title}</Text>
        </View>
        <View style={[CommonStyles.musicView, { backgroundColor: "#ffffff" }]}>
          <View style={CommonStyles.musicBorderView} />
          <View style={{ padding: 10 }}>
            <View style={styles.genre}>
              <View style={styles.gernre2}>
                <Image
                  source={{ uri: item.genre.thumbnail }}
                  style={styles.thumbnail2}
                />
                <Text style={styles.title1}>{item.genre.name}</Text>
              </View>
            </View>
            <View style={styles.genre2}>
              {songsSameGenre.length > 3 ? (
                <ScrollView style={{ flex: 1, maxHeight: 100, width: "100%" }}>
                  {songsSameGenre.map((song, index) => {
                    if (currentSong?.id === song.id) {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setCurrentSong(song);
                            playSound(song);
                          }}
                          style={styles.gernre2}
                        >
                          <Text style={[styles.title1, { fontWeight: "bold" }]}>
                            {song.title}
                          </Text>
                        </TouchableOpacity>
                      );
                    } else {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setCurrentSong(song);
                            playSound(song);
                          }}
                          style={styles.gernre2}
                        >
                          <Text style={styles.title1}>{song.title}</Text>
                        </TouchableOpacity>
                      );
                    }
                  })}
                </ScrollView>
              ) : (
                <>
                  {songsSameGenre.map((song, index) => {
                    if (currentSong?.id === song.id) {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setCurrentSong(song);
                            playSound(song);
                          }}
                          style={styles.gernre2}
                        >
                          <Text style={[styles.title1, { fontWeight: "bold" }]}>
                            {song.title}
                          </Text>
                        </TouchableOpacity>
                      );
                    } else {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setCurrentSong(song);
                            playSound(song);
                          }}
                          style={styles.gernre2}
                        >
                          <Text style={styles.title1}>{song.title}</Text>
                        </TouchableOpacity>
                      );
                    }
                  })}
                </>
              )}
            </View>
            <View
              style={[
                SpaceStyles.alignSpaceBlock,
                SpaceStyles.top2,
                SpaceStyles.padding5,
                { marginBottom: 10, alignItems: "center" },
              ]}
            >
              <TouchableOpacity onPress={() => navigation.goBack(HeaderRight)}>
                <Image source={amplifyIcon} resizeMode="cover" />
              </TouchableOpacity>

              <View style={SpaceStyles.rowFlex}>
                <Image
                  source={skiptoStart}
                  resizeMode="cover"
                  style={SpaceStyles.left5}
                />
                {songStatus ? (
                  <TouchableOpacity
                    style={styles.playpauseIcon}
                    onPress={() => pauseSound()}
                  >
                    <Image
                      source={pause}
                      resizeMode="cover"
                      style={styles.pauseSyles}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.playpauseIcon}
                    onPress={() => playSound(currentSong)}
                  >
                    <Image
                      source={playIcon}
                      resizeMode="cover"
                      style={SpaceStyles.left5}
                    />
                  </TouchableOpacity>
                )}

                <Image
                  source={endIcon}
                  resizeMode="cover"
                  style={SpaceStyles.left5}
                />
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={SpaceStyles.rowFlex}
              >
                <Image
                  source={more}
                  style={styles.pauseSyles}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>

            {/* <View
              style={[
                SpaceStyles.alignSpaceBlock,
                SpaceStyles.padding5,
                SpaceStyles.top2,
              ]}
            >
              <CustomText text={parseInt(songCS)} style={{}} />
              <Slider
                style={CommonStyles.sliderStyle}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor={BLACK}
                maximumTrackTintColor={BLACK}
                thumbTintColor={BLACK}
              />
              <CustomText text={parseInt(songLength)} />
            </View> */}
          </View>
        </View>
      </View>
    </>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  playpauseIcon: {
    marginHorizontal: 10,
  },
  pauseSyles: {
    width: 20,
    height: 20,
  },
  //   Header
  header: {
    flex: 1,
    alignItems: "center",
  },
  thumbnail: {
    marginVertical: 20,
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  thumbnail1: {
    marginVertical: 10,
    width: 100,
    height: 80,
    borderRadius: 15,
    resizeMode: "cover",
  },
  gernre2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  thumbnail2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  genre: {
    flexDirection: "column",
    alignItems: "center",
  },
  genre2: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title0: {
    fontSize: 12,
    color: "#000000",
  },
  title1: {
    fontSize: 14,
    color: "#000000",
  },
  title2: {
    width: "85%",
    textAlign: "center",
    fontSize: 14,
    color: "#000000",
  },
  // Modal
  centeredView: {
    flex: 1,
    marginTop: 100,
  },
  modalView: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "#000000",
    fontWeight: "bold",
    textAlign: "right",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 5,
    fontSize: 16,
  },
  modalText0: {
    marginBottom: 15,
    color: "#000000",
  },
});