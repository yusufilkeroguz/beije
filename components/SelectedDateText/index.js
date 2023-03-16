import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export const SelectedDateText = (props) => {
  const { date } = props;

  return (
    <View style={{ marginBottom: 24, textAlign: 'center' }}>
      <Text>Your next heavy flow pack will be delivered:</Text>
      <Text>{date}</Text>
    </View>
  )
};

SelectedDateText.propTypes = {
  date: PropTypes.string.isRequired,
};
