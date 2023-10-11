import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NavInitial } from "@/types/ComponentTypes"

const initialState: NavInitial = {
    navClass: ['Nav']
}

const navSlice = createSlice({
    name: 'navs',
    initialState,
    reducers: {
        addClassName: (state, action: PayloadAction<{ navClass: string }>) => {
            if (!state.navClass.includes(action.payload.navClass)) {
                state.navClass = state.navClass.concat(action.payload.navClass)
            }
        },
        removeClassName: (state, action: PayloadAction<{ navClass: string }>) => {
            if (state.navClass.includes(action.payload.navClass)) {
                state.navClass.splice(state.navClass.indexOf(action.payload.navClass, 1))
            }
        }
    }
})


export const { addClassName, removeClassName } = navSlice.actions

export default navSlice.reducer;