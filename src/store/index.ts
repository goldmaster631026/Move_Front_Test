// Third Parties
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch, useSelector as useAppSelector, TypedUseSelectorHook } from "react-redux";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";

// Import project
import reducers from "./reducers";


// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export type RootState = ReturnType<typeof reducers>

export type AppDispatch = typeof store.dispatch

const persister = persistStore(store)

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, dispatch, persister, useDispatch, useSelector }