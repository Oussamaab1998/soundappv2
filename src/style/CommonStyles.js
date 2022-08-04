import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../constants';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const CommonStyles = StyleSheet.create({


    GrayBtn: {

        backgroundColor: '#495057',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius:5
    },
    authContainer: {

        flex: 1,
        backgroundColor: Colors.WHITE
    },
    homeTopView: {

        width: width,
        height: 300,

        marginLeft: -30,
        backgroundColor: Colors.BLACK,

        alignItems: 'center',
        justifyContent: 'center'

    },
    headerLeftView: {

    },

    RowSpaceBetween: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    RowStart: {

        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    RowEnd: {

        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    drawerUserIconSection: {

        marginVertical: 10,
        height: 100,
        width: 100,

        backgroundColor: Colors.BLACK,
        borderRadius: 50,

        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    borderView: {

        height: 1,
        width: '100%',
        backgroundColor: Colors.LIGHTGRAY,

        marginVertical: 20
    },

    musicBorderView: {

        height: 1,
        width: '100%',
        backgroundColor: Colors.LIGHTGRAY,
    },

    musicCategory: {

        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    musicList: {

        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },

    musicView: {

        flex: 1,

        width: width,
        padding: 10,

        position: 'absolute',
        bottom: 0,

    },

    DeviderLine: {
        height: 10,
        // backgroundColor: 'red',
        backgroundColor: '#dee2e6',
        // background: 'red',
        width: '100%'
    }

})

export default CommonStyles;