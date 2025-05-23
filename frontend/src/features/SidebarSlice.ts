import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { SidebarType } from "../app/constants";

export interface SidebarState { open: boolean; type: SidebarType; }

const initialState: SidebarState = { open: false, type: SidebarType.CONTACT }

const SidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers:{
        toggleSidebar(state) {
            state.open = !state.open
        },
        updateSidebarType(state, action: PayloadAction<SidebarType>) {
            state.type = action.payload;
        }
    }
});


export const { toggleSidebar, updateSidebarType } = SidebarSlice.actions;
export default SidebarSlice.reducer;