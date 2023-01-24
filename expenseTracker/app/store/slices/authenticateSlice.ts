import {createAsyncThunk, createSlice, CreateSliceOptions} from '@reduxjs/toolkit';

// Types
import {Authenticate} from "../../types/global";
import {IAuthenticateParams} from '../../types/params';

// Services
import {authenticate} from '../../services/APIMethods';
const signInThunk = createAsyncThunk<Authenticate.signInWithPassword, IAuthenticateParams>("auth/signIn", authenticate);
const signUpThunk = createAsyncThunk<Authenticate.signUp, IAuthenticateParams>("auth/logIn", authenticate);




const authenticateSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        isLoged: false
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(signInThunk.fulfilled, (state, action) => {
            console.log("Sign In Response", action.payload);
            //state.token = action.payload;
        }),
        builder.addCase(signUpThunk.fulfilled, (state, action) => {
            console.log("Sing Up Response", action.payload);
        })
    }

});

export const actions = authenticateSlice.actions;
export default authenticateSlice.reducer;