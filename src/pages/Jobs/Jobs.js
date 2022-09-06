import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Jobs.style';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import JobCard from '../../components/JobCard/JobCard';

const Jobs = ({navigation}) => {
  const {error, loading, data} = useFetch(`${Config.API_URL}?page=10`);

  if(loading){
    return(
      <ActivityIndicator />
    )
  }

  if(error){
    console.log(error)
  }

  const handleSelect= id =>{
    navigation.navigate('JobsDetailsPage' , {id})
  }

  const renderJobs = ({item}) => {
    return(
      <JobCard jobData={item} onPressJob={()=> handleSelect(item.id)} />
    )
  };

  return (
    <View style={styles.container}>
      <FlatList data={data.results} renderItem={renderJobs} />
    </View>
  );
};

export default Jobs;
