import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './JobCard.style';

const JobCard = ({jobData , onPressJob}) => {
  return (
    <TouchableOpacity onPress={onPressJob} style={styles.container}>
      <Text style={styles.job_name}>{jobData.name}</Text>
      <Text style={styles.company_name}>{jobData.company.name}</Text>
      <View style={styles.location_container}>
      </View>
      <Text style={styles.level_name}>{jobData.levels[0].name}</Text>
    </TouchableOpacity>
  );
};

export default JobCard;
