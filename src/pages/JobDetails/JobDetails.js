import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import styles from './JobDetails.style';
import RenderHTML from 'react-native-render-html';
import ButtonCard from '../../components/ButtonCard/ButtonCard';
import {useDispatch} from 'react-redux';

const JobDetails = ({route,navigation}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_URL}/${id}`);
  const dispatch = useDispatch();

  const handleFavoriteJob = favoriteJob => {
    dispatch({type: 'ADD_FAV_LIST', payload: {favoriteJob}});
    navigation.navigate('FavoritedPage')
  };

  const handleSubmit = () => {
    Alert.alert('KODWORK', 'Submitted , Thanks');
  };

  const source = {
    html: `${data.contents}`,
  };
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.job_name}>{data.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.location_header}>Locations: </Text>
          <Text style={styles.location}>
            {data.locations && data.locations.length > 0
              ? data.locations[0].name
              : 'Unknown Location'}
          </Text>
        </View>
        <View style={styles.job_level_container}>
          <Text style={styles.job_level_header}>Job Level: </Text>
          <Text style={styles.job_level}>
            {data.levels && data.levels.length > 0
              ? data.levels[0].name
              : 'Unknown Location'}
          </Text>
        </View>
        <Text style={styles.job_detail_header}>Job Detail</Text>
      </View>
      <ScrollView style={styles.job_detail}>
        <RenderHTML
          baseStyle={styles.job_detail_text}
          source={source}
          contentWidth={width}
        />
      </ScrollView>

      <View style={styles.footer_container}>
        <ButtonCard
          buttonName="Submit"
          iconName="logout"
          onPressButton={handleSubmit}
        />
        <ButtonCard
          buttonName="Favorite"
          iconName="heart"
          onPressButton={()=>handleFavoriteJob(data)}
        />
      </View>
    </View>
  );
};

export default JobDetails;
