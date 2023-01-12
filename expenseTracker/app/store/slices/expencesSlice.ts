import { createSlice, CreateSliceOptions, createAsyncThunk } from "@reduxjs/toolkit";

// Services
import {getAllExpences, addExpence} from '../../services/APIMethods';
export const getAllExpencesThunk = createAsyncThunk("expences/getAll", getAllExpences);
export const addExpenceThunk = createAsyncThunk("expences/add", addExpence);

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
        updateExpence(state, action){
            state.expences = state.expences.map(expence => {
                if(expence.id === action.payload.id){
                    return action.payload;
                }else{
                    return expence;
                }
            })
        },
        deleteExpence(state, action){
            state.expences = state.expences.filter(expence => expence.id !== action.payload.id);
        },
        addExpence(state, action){
            state.expences.unshift(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllExpencesThunk.fulfilled, (state, action) => {
            state.expences = getExpencesArray(action.payload);
        }),
        builder.addCase(addExpenceThunk.fulfilled, (state, action) => {
            state.expences.unshift(action.payload as any);
        })
    }
} as CreateSliceOptions<IExpenceSlice> ); 


export const actions = expencesSlice.actions;

export default expencesSlice.reducer;