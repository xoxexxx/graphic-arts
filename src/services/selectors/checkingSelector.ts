import { createSelector } from "reselect";
import { RootState } from "../store";

const selectCheck = (state: RootState) => state.check

export const checkURLSelector = createSelector(
    [selectCheck],
    //@ts-ignore
    (state) => state.check
)