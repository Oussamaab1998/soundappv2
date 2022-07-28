import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../constants';

const TextStyles = StyleSheet.create({

    //---------- regular

    // black
    textBold48Black: {

        ...Fonts.regular48,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 48,
        lineHeight: 84,

        color: Colors.BLACK
    },
    textBold36Black: {
        ...Fonts.regular36,
        fontWeight: '400',
    },
    textBold24Black: {

        ...Fonts.regular24,
        fontWeight: '400',
    },
    textBold28Black:{

        ...Fonts.regular24,
        fontWeight: '400',
    },

    // gray
    textBold24Gray: {

        ...Fonts.regular24,
        fontWeight: '400',
        color: Colors.GRAY
    },


    //---------- segoe

    // gray
    textSegoe18DarkGray: {

        ...Fonts.regular14,
        color: Colors.GRAY
    },

    // black
    textSegoe14Black: {

        ...Fonts.regular14
    },

    // white
    textSegoe48White:{

        ...Fonts.regular48,
        color: Colors.WHITE

    },
    textSegoe18White: {

        ...Fonts.regular18,
        color: Colors.WHITE
    },

    //black
    textSegoe13Black: {

        ...Fonts.regular13,
    },
    textSegoe18Black: {

        ...Fonts.regular18,
    },

    //---------- quick sand

    // black

    textBoldQuicksand64Black: {
        ...Fonts.boldQuicksand64,

    },
    textQuicksandMedium18Black:{
        ...Fonts.quicksandMedium18,
    },
    textQuicksand14Black: {

        ...Fonts.quicksandMedium14,
    },
    textQuicksand10Black: {

        ...Fonts.quicksandMedium10,
    },

    textQuicksandBold10Black: {

        ...Fonts.quicksandMedium10,
        fontWeight: 'bold',
    },
    textQuicksandBold14Black: {

        ...Fonts.quicksandMedium14,
        fontWeight: 'bold',
    },

    // gray
    textQuicksand14LightGray: {

        ...Fonts.quicksandMedium14,
        color: Colors.LIGHTGRAY

    },

})

export default TextStyles;