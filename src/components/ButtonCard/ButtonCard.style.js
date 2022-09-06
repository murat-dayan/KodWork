import { Dimensions, StyleSheet } from 'react-native'

const deviceSize=Dimensions.get("window")

export default StyleSheet.create({
    container:{
        backgroundColor:'red',
        width:deviceSize.width*0.42,
        borderRadius:10,
        padding:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    text:{
        alignSelf:'center',
        fontWeight:'bold',
        color:'white',
        marginLeft:5
    }
})