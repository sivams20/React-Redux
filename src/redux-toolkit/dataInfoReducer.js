import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getDataInfo = createAsyncThunk('api/data', ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.data;
        });
});

const dataInfoSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        error: '',
        loading: false
    },
    extraReducers: {
        [getDataInfo.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getDataInfo.pending]: (state, action) => {
            state.loading = true;
        },
        [getDataInfo.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Some error occured";
        }
    }
});

export {getDataInfo};
export default dataInfoSlice.reducer;
