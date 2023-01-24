import axios from "axios"

// Types
import { IExpenseItem, Authenticate } from "../types/global";
import { IAuthenticateParams } from '../types/params';

const BASE_URL = "https://expencetracker-6092e-default-rtdb.europe-west1.firebasedatabase.app/";
const API_KEY = "AIzaSyC0iwmh6RRrxQ9tJHkKtOlPQ9ao0B0fEPo";
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
        const updatedExpenceResponse = await axios.put(`${BASE_URL}expences/${updatedExpence.id}.json`, {
            title: updatedExpence.title,
            price: updatedExpence.price,
            date: updatedExpence.date
        });
        
        
        return {
            ...updatedExpenceResponse.data,
            id: updatedExpence.id
        };
    }catch(error){
        console.error(`Error in updating an expence with id: ${updatedExpence.id}.`, error);
        return Promise.reject(error);
    }
}


export const deleteExpence = async (expenceToDeleteId: string): Promise<string> => {
    try{
        await axios.delete(`${BASE_URL}expences/${expenceToDeleteId}.json`);
        return expenceToDeleteId;
    }catch(error){
        console.error(`Error in deleting an expence with id: ${expenceToDeleteId}.`, error);
        return Promise.reject(error);
    }
}


export const authenticate= async <T = Authenticate.signUp | Authenticate.signInWithPassword, P = IAuthenticateParams> (method: T, params: P ): Promise<any> => {
    try{
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=${API_KEY}`, {
            ...params,
            returnSecureToken: true
        });

        return response.data;
    }catch(error){
        console.error(`Error in authentication with method: ${method}. `, error);
        return Promise.reject(error);
    }
}
