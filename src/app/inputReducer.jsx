import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  first: '',
  second: '',  
};

const inputSlice = createSlice({
  name: 'inpSlice',
  initialState,
  reducers: {
    addValue(state, action){
      const [name, value] = action.payload;
      state[name] = value;
    }
  }
});

export default inputSlice.reducer;
export const {addValue} = inputSlice.actions;