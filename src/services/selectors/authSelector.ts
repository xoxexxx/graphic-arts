import { createSelector } from "reselect";
import { RootState } from "../store";


const selectAuth = (state: RootState) => state.auth 

export const authSelector = createSelector(
    [selectAuth],
    //@ts-ignore
    (state) => state.auth
)