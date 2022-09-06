import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import JobCard from '../../components/JobCard/JobCard';
import {useSelector} from 'react-redux';
import styles from './FavoritedJobs.style';
import {useDispatch} from 'react-redux';

const FavoritedJobs = ({navigation}) => {
  const job = useSelector(state => state.favoriteJob);
  console.log(job)

  const dispatch = useDispatch();

  const handleRemoveFav = item => {
    dispatch({type: 'REMOVE_FAV', payload: {job: item}});
  };

  const renderFavJobs = ({item}) => {
    return (
      <View style={styles.container}>
        <JobCard jobData={item} />
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleRemoveFav(item)}>
            <Text style={styles.button_text}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={job} renderItem={renderFavJobs} />
    </View>
  );
};

export default FavoritedJobs;
