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

// components
import ModalContainer from "../../../Common/ModalContainer";

import {
  amplifyIcon,
  addIcon,
  musicIcon,
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

//---------- componets

const AudioPlayer = ({ navigation, route }) => {
  //---------- state and params
  const {
    item,
    songs, // original songs
  } = route.params;

  // let songs = songs1           // for testing

  // state
  const [currentSong, setCurrentSong] = useState(item);
  const [modalVisible, setModalVisible] = useState(false);
  const [songStatus, setSongStatus] = useState(false);
  const [isAffirmations, setIsAffirmations] = useState(false);
  const [songLength, setSongLength] = useState(0);
  const [songCS, setSongCS] = useState(0);
  const [songsSameGenre, setSongsSameGenre] = useState([]);
  const [songVar, setSongVar] = useState(undefined);
  const [modalKey, setModalKey] = useState(undefined);

  //---------- life cycles

  useEffect(() => {
    if (songs) fetchSameGenre();
  }, []);

  useEffect(() => {
    if (item?.url) {
      setCurrentSong(item);
      // setSongStatus(true)
    } else {
      setCurrentSong(undefined);
      // setSongStatus(false)
    }
  }, [item?.url]);

  useEffect(() => {
    if (currentSong?.url) {
      playSound(currentSong);
    } else {
      pauseSound();
      setCurrentSong(undefined);
    }

    console.log("update for current song", currentSong);
  }, [currentSong?.url]);

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

  const playSound = (song) => {
    pauseSound();

    console.log("call this function again and again", currentSong);
    if (song.url) {
      setSongStatus(true);

      // if (songVar !== null) pauseSound();
      var whoosh = new Sound(song.url, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log("failed to load the sound", error);
          return;
        }
        // loaded successfully

        whoosh.getCurrentTime((seconds) => setSongCS(seconds));
        setSongVar(whoosh);
        setSongLength(whoosh.getDuration());

        // Play the sound with an onEnd callback
        whoosh.play((success) => {
          if (success) {
            console.log("successfully finished playing");
          } else {
            console.log("playback failed due to audio decoding errors");
          }
        });
      });
    }
  };

  const pauseSound = () => {
    console.log("songVar", songVar);
    if (songVar) {
      songVar.pause();
      setSongStatus(false);
    }
  };

  //---------- render main view

  return (
    <>
      <ModalContainer
        navigation={navigation}
        isVisible={isAffirmations}
        render_view_key={modalKey}
        content={item.affirmations_song}
        hideModal={() => setIsAffirmations(false)}
      />

      {/* <Modal
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
      </Modal> */}
      <View style={styles.conatiner}>
        <View
          style={[
            styles.header,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
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
                            // playSound(song);
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
                            // playSound(song);
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
                    if (currentSong?.id === song.id && songStatus) {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setCurrentSong({});
                            pauseSound();
                          }}
                          style={styles.gernre2}
                        >
                          <Image
                            source={pause}
                            resizeMode="cover"
                            style={{
                              height: 16,
                              width: 16,
                              marginLeft: 2,
                            }}
                          />

                          <Text
                            style={[
                              styles.title1,
                              { fontWeight: "bold", marginLeft: 12 },
                            ]}
                          >
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
                            // playSound(song);
                          }}
                          style={styles.gernre2}
                        >
                          <Image
                            source={playIcon}
                            resizeMode="cover"
                            style={{
                              height: 20,
                              width: 20,
                            }}
                          />

                          <Text style={[styles.title1, { marginLeft: 10 }]}>
                            {song.title}
                          </Text>
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
                    onPress={() => {
                      setCurrentSong({});
                      // pauseSound()
                    }}
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
                    onPress={() => {
                      setCurrentSong(currentSong?.url ? currentSong : item);
                      // playSound()
                    }}
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

              {/* <TouchableOpacity

                // onPress={() => setModalVisible(!modalVisible)}
                onPress={() => setIsAffirmations(!isAffirmations)}
                style={SpaceStyles.rowFlex}
              >
                <Image
                  source={more}
                  style={styles.pauseSyles}
                  resizeMode="cover"
                />
              </TouchableOpacity> */}

              <View style={SpaceStyles.rowFlex}>
                <TouchableOpacity
                  onPress={() => {
                    setModalKey("save");
                    setIsAffirmations(!isAffirmations);
                  }}
                >
                  <Image source={addIcon} resizeMode="cover" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setModalKey("affirmations");
                    setIsAffirmations(!isAffirmations);
                  }}
                >
                  <Image
                    source={musicIcon}
                    resizeMode="cover"
                    style={SpaceStyles.left5}
                  />
                </TouchableOpacity>
              </View>
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

//---------- styels

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
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
    justifyContent: "flex-start",
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

// constants testing data

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
    url: "https://www.kozco.com/tech/piano2-Audacity1.2.5.mp3",
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
    url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3",
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
    // url: "http://soundnsoulful.alliedtechnologies.co:8000/media/songs/2022/07/28/wvd7x8ZrxGBZ9AsLdojX4itfFDSI2b.mp3",
    url: "https://drive.google.com/file/d/1ooFUF0jOTmv6EMoXpjaLy6hshlZx6V2B/view?usp=sharing",
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
