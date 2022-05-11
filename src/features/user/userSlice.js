import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    photo: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
            state.photo = payload.photo;
        },

        setSignOut: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    },
})

export const { setUser, setSignOut } = userSlice.actions;
export default userSlice.reducer;