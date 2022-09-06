import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header_container: {
    backgroundColor: 'lightgray',
    padding: 3,
  },
  job_name: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  location_container: {
    flexDirection: 'row',
  },
  location_header: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 19,
  },
  location: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
  },
  job_level_container: {
    flexDirection: 'row',
  },
  job_level_header: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 19,
  },
  job_level: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
  },
  job_detail_header: {
    marginTop:10,
    alignSelf: 'center',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  job_detail:{
    paddingHorizontal:8
  },
  job_detail_text:{
    fontSize:16,
    color:'black'
  },
  footer_container:{
    backgroundColor:'lightgray',
    padding:20,
    justifyContent:'space-evenly',
    flexDirection:'row'
  },
});
