'use client';
import { Provider } from 'react-redux';
import { store } from '@/stores/store';

export function ReduxProviders({ children }) {
  return <Provider store={store}>{children}</Provider>;
}