import { createSelector } from "reselect";
import { RootState } from "../store";


const selectTemplate = (state: RootState) => state.template

export const dropMenuSelector = createSelector(
    [selectTemplate],
    //@ts-ignore
    (state) => state.template
)