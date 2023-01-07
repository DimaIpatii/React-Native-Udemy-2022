import { configureStore } from "@reduxjs/toolkit";
import expanceReducer from './slices/expencesSlice';

const appStore = configureStore({
    reducer: expanceReducer
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type DispatchApp = typeof appStore.dispatch;