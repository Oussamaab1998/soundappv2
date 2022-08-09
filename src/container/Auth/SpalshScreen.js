import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Image, SafeAreaView } from 'react-native'
import { splasGif } from "../../constants/Images";
import NavigationService from "../../navigation/NavigationService";
import AuthStyles from "../../style/AuthStyles";
import SpaceStyles from "../../style/SpaceStyles";
import FastImage from 'react-native-fast-image'


const mapState = ({ localReducer }) => ({
    isLoggedIn: localReducer.isLoggedIn,
});

function SpalshScreen({ navigation }) {

    const { isLoggedIn } = useSelector(mapState);

    useEffect(() => {
        setTimeout(() => {
            isLoggedIn ?
                navigation.replace('Route')
                :
                navigation.replace('AuthNavigator')
        }, 3000);
    }, []);

    return (
        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <SafeAreaView />

            <FastImage
                style={{ width: 200, height: 200 }}
                source={splasGif}
                // source={{
                    // uri: splasGif,
                    // headers: { Authorization: 'someAuthToken' },
                    // priority: FastImage.priority.normal,
                // }}
                resizeMode={FastImage.resizeMode.contain}
            />

            {/* <View
                style={SpaceStyles.flexCenter}
            >
                <Image
                    source={splasGif}
                    resizeMode='contain'
                />
            </View> */}
            <SafeAreaView />
        </View>
    )
}

export default SpalshScreen;