import { createSelector } from "reselect";
import { RootState } from "../store";

const selectDrop = (state: RootState) => state.drop

export const dropMenuSelector = createSelector(
    [selectDrop],
    //@ts-ignore
    (state) => state.drop
)