//---------- imports

// react
import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, Text, TouchableOpacity } from 'react-native'

// common componets
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";
import NavigationService from "../../navigation/NavigationService";

// styles
import AuthStyles from "../../style/AuthStyles";
import SpaceStyles from "../../style/SpaceStyles";
import TextStyles from "../../style/TextStyles";

// server hooks
import useServerCommunucation from '../../utils/ServerCommunication'

//---------- component

function Login({ navigation }) {

    //---------- state, veriable and hooks

    // hook
    const { serverRequest, dataPocket, loading, error } = useServerCommunucation()

    //---------- life cycle

    useEffect(() => {


        console.log('login data pocket :', dataPocket.login_data_pocket)

    }, [dataPocket.login_data_pocket])


    useEffect(() => {


        console.log('========================================')
        console.log('login data pocket :', dataPocket)
        console.log('========================================')

    }, [dataPocket])


    //---------- helper: user's actions

    const handleLogin = () => {

        NavigationService.navigate('Route')
        // serverRequest({
        //     key: 'login_data_pocket',
        //     request_type: 'get'
        // })
    }

    //---------- return main view

    return (
        <View style={AuthStyles.authContainer}>
            <SafeAreaView />
            <View style={[SpaceStyles.top14, SpaceStyles.padding10]}>
                <CustomText
                    text={'Login'}
                    style={[TextStyles.textBold48Black, { alignSelf: 'center' }]}
                />
                <View style={[ SpaceStyles.top10]}>
                    <CustomTextInput
                        placeholder={'Email'}
                        containerStyle={SpaceStyles.top1}
                    />
                </View>
                <View style={SpaceStyles.vertical1}>
                    <CustomTextInput
                        placeholder={'Password'}
                        containerStyle={SpaceStyles.top1}
                    />
                    <CustomText
                        text={'Forgot your password?'}
                        style={[TextStyles.textSegoe14Black, SpaceStyles.top1, { textAlign: 'right' }]}
                    />
                </View>
                <TouchableOpacity style={[AuthStyles.smallButton, SpaceStyles.top5]}
                    onPress={() => {
                        handleLogin()
                    }}
                >
                    <CustomText
                        text={'Sign in'}
                        style={TextStyles.textSegoe18White}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                 style={[ SpaceStyles.top5]}
                 onPress={() => NavigationService.navigate('SignUp')}
                 >
                    <CustomText
                        text={'Create Account'}
                        style={[TextStyles.textSegoe18Black, SpaceStyles.top10, { textAlign: 'center' }]}
                    />
                </TouchableOpacity>
            </View>
            <SafeAreaView />
        </View>
    )
}

//---------- export component

export default Login