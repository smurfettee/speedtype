import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    punctuation: false,
    numbers: false,
    settingType: "time",
    setting: [15, 30, 60, 120],
    selectedSetting: null,
  },
  reducers: {
    setPunctuation: (state) => {
        state.punctuation = !state.punctuation;
    },
    setNumbers: (state) => {
        state.numbers = !state.numbers;
    },
    setSettingType: (state, value) => {
        state.settingType = value;
    },
    setSetting: (state, value) => {
        state.setting = value;
    },
    setSelectedSetting: (state, value) => {
        state.selectedSetting = value;
    }
  },
})

export const { setPunctuation, setNumbers, setSettingType, setSetting, setSelectedSetting } = settingsSlice.actions

export default settingsSlice.reducer