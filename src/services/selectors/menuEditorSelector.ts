import { createSelector } from "reselect";
import { RootState } from "../store";

const selectMenuEditor = (state: RootState) => state.menuEditor

export const dropMenuSelector = createSelector(
    [selectMenuEditor],
    //@ts-ignore
    (state) => state.menuEditor
)