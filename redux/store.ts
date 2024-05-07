import { configureStore } from '@reduxjs/toolkit';
import userProfileSlice from '@/redux/features/userProfile/userProfileSlice';
import authSlice from '@/redux/features/auth/authSlice';
import { ecommerceApi } from '@/redux/api';
import passwordVisibilitySlice from '@/redux/features/password/passwordSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      userProfile: userProfileSlice,
      [ecommerceApi.reducerPath]: ecommerceApi.reducer,
      auth: authSlice,
      passwordVisibility: passwordVisibilitySlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ecommerceApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];