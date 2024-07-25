import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle : false
}

const slice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    onToggled : (state: { toggle: boolean }) => {
        state.toggle = !state.toggle;
      },
  }
});

export const {onToggled} = slice.actions

export default slice.reducer