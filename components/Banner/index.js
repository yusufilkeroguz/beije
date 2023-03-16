import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const Banner = (props) => {
  const {
    label = "Change Your Preffered delivery date.\nWe'll deliver on the same day in two months time.",
  } = props;
  return <Text style={styles.banner}>{label}</Text>;
};

const styles = StyleSheet.create({
  banner: {
    textAlign: 'center',
    lineHeight: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 48,
    width: '100%',
    elevation: 1,
    color: '#3f4549',
    paddingVertical: 32,
  },
});

Banner.propTypes = {
  label: PropTypes.string,
};
