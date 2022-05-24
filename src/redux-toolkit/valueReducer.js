import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const valueSlice = createSlice({
    name: 'value',
    initialState,
    reducers:{
        increment: (state, action) => {
            return state + 1;
        },
        decrement: (state, action) => {
            return state - 1;
        },
        reset: () => {
            return initialState;
        }
    }
});

export const { increment, decrement, reset } = valueSlice.actions;

export default valueSlice.reducer;