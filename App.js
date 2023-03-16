import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import moment from 'moment';

import Button from './components/Button';
import { Banner } from './components/Banner';
import { Calendar } from './components/Calendar';
import { SelectedDateText } from './components/SelectedDateText';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const formattedDate = selectedDate
    ? moment(selectedDate.toString()).format('Do MMM')
    : '';

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <Banner />

      <Calendar selectedDate={selectedDate} onDateChange={onDateChange} />

      <SelectedDateText date={formattedDate} />

      <Button onPress={() => console.log('hi')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
  },
});
