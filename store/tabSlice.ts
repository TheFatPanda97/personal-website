import { createSlice } from '@reduxjs/toolkit';
import _ from 'underscore';

interface ITab {
  key: string;
  title: string;
  iconUrl: string;
}

interface ITabState {
  tabs: Record<string, ITab[]>;
}

// Define the initial state using that type
const initialState: ITabState = {
  tabs: {
    '/': [
      {
        key: 'welcome',
        title: 'Welcome',
        iconUrl:
          'https://raw.githubusercontent.com/VIAplanner/via-timetable/master/public/favicon.ico',
      },
    ],
    about: [
      {
        key: 'who-am-i',
        title: 'Who Am I?',
        iconUrl:
          'https://raw.githubusercontent.com/VIAplanner/via-timetable/master/public/favicon.ico',
      },
    ],
    projects: [
      {
        key: 'viaplanner',
        title: 'Viaplanner',
        iconUrl:
          'https://raw.githubusercontent.com/VIAplanner/via-timetable/master/public/favicon.ico',
      },
    ],
    _error: [
      {
        key: 'viaplanner',
        title: 'Viaplanner',
        iconUrl:
          'https://raw.githubusercontent.com/VIAplanner/via-timetable/master/public/favicon.ico',
      },
    ],
  },
};

const tabSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

export default tabSlice.reducer;
