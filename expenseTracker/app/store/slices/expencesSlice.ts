import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";

import { IExpenseItem } from "../../types/global";
interface IExpenceSlice {
    expences: IExpenseItem[]
}
const expencesSlice = createSlice({
    name: "expences",
    initialState: {
        expences: [
            {
                id: 1,
                title: "Food",
                date: "07/01/2023",
                price: 200
            },
            {
                id: 2,
                title: "Clothes",
                date: "31/12/2022",
                price: 100
            }
        ],
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
    }
} as CreateSliceOptions<IExpenceSlice> ); 


export const actions = expencesSlice.actions;

export default expencesSlice.reducer;