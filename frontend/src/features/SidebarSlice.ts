import { createSlice } from "@reduxjs/toolkit";
import type { SidebarType } from "../app/constants";

export interface SidebarState { open: boolean; type: SidebarType; }

const initialState: SidebarState = { open: false, type: "contact" }

const SidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers:{
        toggleSidebar(state) {
            state.open = !state.open
        },
        updateSidebarType(state, action) {
            state.type = action.payload.type;
        }
    }
});


export const { toggleSidebar, updateSidebarType } = SidebarSlice.actions;
export default SidebarSlice.reducer;