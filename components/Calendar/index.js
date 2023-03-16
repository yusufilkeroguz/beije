import { useState } from 'react';
import { Dimensions, View } from 'react-native';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';
import PropTypes from 'prop-types';

import Chevron from '../../assets/svg/Chevron';
import { WEEKDAYS } from '../../utils/translates';

function daysInMonth(month) {
  var count = moment().month(month).daysInMonth();
  var days = [];
  for (var i = 1; i < count + 1; i++) {
    days.push(moment().month(month).date(i));
  }
  return days;
}

const onMonthChange = (date = moment()) => {
  const customDatesStyles = [];
  const days = daysInMonth(date.month());

  for (var i = 0; i < days.length; i++) {
    customDatesStyles.push({
      date: days[i],
      style: { backgroundColor: '#faf9f7' },
      textStyle: { color: '#3f4549' },
      containerStyle: [],
      allowDisabled: false,
    });
  }

  return customDatesStyles;
};

export const Calendar = (props) => {
  const { onDateChange, selectedDate } = props;
  const [customDatesStyles, setCustomDatesStyles] = useState(onMonthChange());
  const windowWidth = Dimensions.get('window').width;

  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
        marginBottom: 24,
      }}
    >
      <CalendarPicker
        startFromMonday={true}
        onDateChange={onDateChange}
        nextComponent={
          <View
            style={{
              backgroundColor: '#faf9f7',
              transform: [{ rotateY: '90deg' }],
            }}
          >
            <Chevron width={16} height={16} />
          </View>
        }
        selectedStartDate={selectedDate}
        weekdays={WEEKDAYS}
        previousComponent={
          <View
            style={{
              backgroundColor: '#faf9f7',
              transform: [{ rotateY: '90deg' }],
            }}
          >
            <Chevron width={16} height={16} />
          </View>
        }
        onMonthChange={(date) => {
          const customDateInSelectedMonth = onMonthChange(date);
          setCustomDatesStyles(customDateInSelectedMonth);
        }}
        selectedDayColor="#68c5ba"
        width={windowWidth - 72}
        todayBackgroundColor={'transparent'}
        customDatesStyles={customDatesStyles}
      />
    </View>
  );
};

Calendar.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  selectedDate: PropTypes.any,
};
