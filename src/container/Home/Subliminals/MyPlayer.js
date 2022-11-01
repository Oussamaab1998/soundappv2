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
    ActivityIndicator
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

// third party lib
import Sound from "react-native-sound";
import TrackPlayer from "react-native-track-player";

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


const MyPlayer = (props) => {
    const music = [{
        title: 'death bed',
        artist: 'Powfu',
        artwork: 'https://images-na.ssl-images-amazon.com/images/I/A1LVEJikmZL._AC_SX425_.jpg',
        url: 'https://sample-music.netlify.app/death%20bed.mp3',
        duration: 2 * 60 + 53,
        id: '1',
      },{
        title: 'bad liar',
        artist: 'Imagine Dragons',
        artwork: 'https://images-na.ssl-images-amazon.com/images/I/A1LVEJikmZL._AC_SX425_.jpg',
        url: 'https://sample-music.netlify.app/Bad%20Liar.mp3',
        duration: 2 * 60,
        id: '2',
        track_number: '2'
      }
     ]
    const {
        item,
        songs, // original songs
    } = props.route.params;

    useEffect(() => {
        trackPlayer()
    }, [])

    const trackPlayer = () => {
        var newSongs = songs.map(val => ({
            ...val,
            artist: 'Vinay'
        }))
        console.log(newSongs, 'NEW')
        TrackPlayer.setupPlayer({ waitForBuffer: true })
            .then(async () => {
                await TrackPlayer.add([...music]);
                TrackPlayer.updateOptions({
                    capabilities: [
                        TrackPlayer.CAPABILITY_PLAY,
                        TrackPlayer.CAPABILITY_PAUSE,
                        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
                    ],
                    compactCapabilities: [
                        TrackPlayer.CAPABILITY_PLAY,
                        TrackPlayer.CAPABILITY_PAUSE,
                        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
                    ]
                })
            })
    }

    const playTrack = async(val) => {
        console.log(await TrackPlayer.getCurrentTrack(),'Current Track Id')
        console.log(await TrackPlayer.getTrack(val.id.toString()),'Current Track')
        await TrackPlayer.skip(val.id.toString())
        await TrackPlayer.play()
    }

    return (
        <View>
            {
                music.map(val => (
                    <TouchableOpacity onPress={()=> {
                        playTrack(val)
                    }}>
                        <Text>{val.title}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default MyPlayer