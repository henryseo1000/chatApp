import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import RootReducer, { RootState } from "./RootReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: []
}

export const Store = configureStore({
    reducer: persistReducer(persistConfig, RootReducer)!,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger)
})

export const Persistor = persistStore(Store);

export type AppDispatch = typeof Store.dispatch