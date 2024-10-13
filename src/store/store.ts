import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./features/authSlise"
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { playListReducer } from "./features/playlistSlice";


export const makeStore = () => {
    return configureStore ({
        reducer: combineReducers({
            auth: authReducer,
            playlist: playListReducer,
        }),
    });
};



export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;