import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

/*----------------*/
export const userProfilePicUpload = createAsyncThunk('userProfilePicUpload', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}upload`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const userCvUpload = createAsyncThunk('userCvUpload', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}upload`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });
        return response.data;
    } catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});


/*----------------*/
export const userObjSlice = createSlice({
    name: "userAuthState",
    initialState: {
        loading: false,
        error: '',
        msg: '',
        userFileUrl: ''
    },
    reducers: {
        clearError: (state) => {
            state.error = '';
            state.msg = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userProfilePicUpload.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(userProfilePicUpload.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.userFileUrl = `${action.payload.Url}${action.payload.FileName}`;
            state.msg = 'File Uploaded Successfully';
        })
        builder.addCase(userProfilePicUpload.rejected, (state, action) => {
            state.loading = false;
            state.userFileUrl = '';
            state.error = action.payload?.message || action.error?.message;
            state.msg = '';
        })
        /*---------------*/
        builder.addCase(userCvUpload.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(userCvUpload.fulfilled, (state, action) => {
            console.log(action);
            state.loading = false;
            state.userFileUrl = `${action.payload.Url}${action.payload.FileName}`;
            state.error = '';
            state.msg = 'File Uploaded Successfully';
        })
        builder.addCase(userCvUpload.rejected, (state, action) => {
            state.loading = false;
            state.userFileUrl = '';
            state.error = action.payload?.message || action.error?.message;
            state.msg = 'Unable to upload file';
        })
    },
});

/*-----------*/
axios.interceptors.response.use(function (response) {
    //console.log('Do something with response data');
    return response;
}, function (error) {
    if (error?.response?.status === 403) {
        console.log('Do something with 403 response, get new token and set in localstorage');
        // localStorage.removeItem('yumUserToken');
        // localStorage.removeItem('yumUserProfile');
        window.location.href = '/';
    }
    return Promise.reject(error);
});

/*-----------*/
export const { clearError } = userObjSlice.actions;

export default userObjSlice.reducer;