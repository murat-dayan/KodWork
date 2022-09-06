import { Dimensions, StyleSheet } from 'react-native'

const deviceSize=Dimensions.get('window')


export default StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'center',
        width:deviceSize.width*0.9,
        height:deviceSize.height/5.5,
        marginVertical:10,
        padding:3,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10
    },
    job_name:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        marginBottom:5
    },
    company_name:{
        fontWeight:'bold',
        color:'black',
        marginBottom:5

    },
    location_container:{
        alignSelf:'flex-start',
    },
    location_name:{
        backgroundColor:'red',
        color:'white',
        fontWeight:'bold',
        padding:3,
        paddingHorizontal:5,
        borderRadius:10
    },
    level_name:{
        alignSelf:'flex-end',
        color:'red',
        marginRight:5,
        fontWeight:'bold',

    }
})