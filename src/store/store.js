import {configureStore} from "@reduxjs/toolkit";
import { settingsSlice } from "./settingsStore";

export default configureStore({
    reducer: {
        settings: settingsSlice.reducer
    }
})