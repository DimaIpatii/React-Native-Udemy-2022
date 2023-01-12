import axios from "axios"
import { IExpenseItem } from "../types/global";

const BASE_URL = "https://expencetracker-6092e-default-rtdb.europe-west1.firebasedatabase.app/";
const EXPENCES_ENDPOINT = "expences.json";

export const getAllExpences = async () => {
    try{
        const allExpencesResponse = await axios.get(`${BASE_URL}${EXPENCES_ENDPOINT}`);
        return allExpencesResponse.data;
    }catch(error){
        console.error("Error in getting all expences. ", error);
        return Promise.reject(error);
    }
}

export const addExpence = async (newExpence: Partial<IExpenseItem>) => {
    try{
        const newExpenceResponse = await axios.post(`${BASE_URL}${EXPENCES_ENDPOINT}`, newExpence);
        return {
            ...newExpence,
            id: newExpenceResponse.data.name,
        };
    }catch(error){
        console.error("Error in adding a new expence.", error);
        return Promise.reject(error);
    }
};

export const updateExpence = async (updatedExpence: IExpenseItem): Promise<IExpenseItem> => {
    try{
        const updatedExpenceResponse = await axios.post(`${BASE_URL}${updatedExpence.id}`, updatedExpence);
        
        return {
            ...updatedExpence,
            id: updatedExpenceResponse.data.name,
        };
    }catch(error){
        console.error("Error in updating an expence.", error);
        return Promise.reject(error);
    }
}

/* export const deleteExpenceData = async (id: string) => {

} */
