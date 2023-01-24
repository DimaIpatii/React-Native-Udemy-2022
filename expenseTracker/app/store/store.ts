import { configureStore } from "@reduxjs/toolkit";
import expanceReducer from './slices/expencesSlice';
import authenticateReducer from './slices/authenticateSlice';

const appStore = configureStore({
    reducer: {
        expanceReducer,
        authenticateReducer
    }
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type DispatchApp = typeof appStore.dispatch;