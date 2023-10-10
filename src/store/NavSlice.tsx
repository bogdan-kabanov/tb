import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const navSlice = createSlice({
    name: 'navs',
    initialState: {
        navClass: ['Nav']
    },
    reducers: {
        addClassName: (state, action: PayloadAction<string[]>) => {
            if(!state.navClass.includes(action.payload)) {
                state.navClass = state.navClass.concat(action.payload)
            }
        },
        removeClassName: (state, action: PayloadAction<string[]>) => {
            if(state.navClass.includes(action.payload)) {
                state.navClass.splice(state.navClass.indexOf(action.payload, 1))
            }
        }
    }
})


export const { addClassName, removeClassName } = navSlice.actions

export default navSlice.reducer;