import { configureStore } from '@reduxjs/toolkit'
import StyleClassReducer from "./StyleClass"

export default configureStore({
    reducer: {
        dinamicClassArray: StyleClassReducer,
    }
});