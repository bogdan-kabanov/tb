import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ClassArray } from "@/types/ComponentTypes"

const initialState: ClassArray = {
    classArray: {
        Nav: ['Nav'],
        Content: ['Content']
    }
}

const StyleClassReducer = createSlice({
    name: 'classArray',
    initialState,
    reducers: {
        addClassName: (
            state,
            action:
                PayloadAction<{
                    nameArray: string,
                    classArray: string[]
                }>
        ) => {
            let newClassArray = [...state.classArray[action.payload.nameArray]]
            action.payload.classArray.forEach(addClassName => {
                if (!newClassArray.includes(addClassName)) {
                    newClassArray.push(addClassName)
                }
            })
            state.classArray[action.payload.nameArray] = newClassArray
        },
        removeClassName: (
            state,
            action:
                PayloadAction<{
                    nameArray: string,
                    classArray: string[]
                }>
        ) => {
            const oldArray = state.classArray[action.payload.nameArray]
            action.payload.classArray.forEach(removeClassName => {
                state.classArray[action.payload.nameArray] = oldArray.slice(0, oldArray.indexOf(removeClassName, 1))
            })
        }
    }
})


export const { addClassName, removeClassName } = StyleClassReducer.actions

export default StyleClassReducer.reducer;