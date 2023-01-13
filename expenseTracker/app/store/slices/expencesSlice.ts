import { createSlice, CreateSliceOptions, createAsyncThunk } from "@reduxjs/toolkit";

// Services
import {getAllExpences, addExpence, updateExpence, deleteExpence } from '../../services/APIMethods';
export const getAllExpencesThunk = createAsyncThunk("expences/getAll", getAllExpences);
export const addExpenceThunk = createAsyncThunk("expences/add", addExpence);
export const updateExpenceThunk = createAsyncThunk("expences/update", updateExpence);
export const deleteExpenceThunk = createAsyncThunk("expences/delete", deleteExpence);

// Types
import { IExpenseItem } from "../../types/global";
interface IExpenceSlice {
    expences: IExpenseItem[]
}

const getExpencesArray = (inputData: any): IExpenseItem[] => {
    const response: IExpenseItem[] = [];

    for(const key in inputData){
        response.push({
            id: key,
            ...inputData[key]
        })
    }

    return response.reverse();
}

const expencesSlice = createSlice({
    name: "expences",
    initialState: {
        expences: [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllExpencesThunk.fulfilled, (state, action) => {
            state.expences = getExpencesArray(action.payload);
        }),
        builder.addCase(addExpenceThunk.fulfilled, (state, action) => {
            state.expences.unshift(action.payload as any);
        }),
        builder.addCase(updateExpenceThunk.fulfilled, (state, action) => {

            state.expences = state.expences.map(expence => {
                if(expence.id === action.payload.id){
                    return action.payload;
                }else {
                    return expence;
                }
            })
        }),
        builder.addCase(deleteExpenceThunk.fulfilled, (state, action) => {
            const remainedExpences = state.expences.filter(expence => expence.id !== action.payload);
            console.log("Remained",remainedExpences)
            state.expences = remainedExpences;
        })
    }
} as CreateSliceOptions<IExpenceSlice> ); 


export const actions = expencesSlice.actions;

export default expencesSlice.reducer;