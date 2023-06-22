import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
    name: "incdec",
    initialState: 0,
    reducers: {
        Inc: (state, action) => {
            return state += action.payload;
        },
        Dec: (state, action) => {
            return state -= action.payload;
        },
        incrementByAmount : (state, action) => {
            return state += action.payload;
        }
    }
})

export const { Inc, Dec, incrementByAmount } = incdecSlice.actions; //get in reactComponent for ui
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
  }
// export const selectCount = (state) => state.incdec;
export default incdecSlice.reducer; // get reducers in store.js