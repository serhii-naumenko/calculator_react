import { createSlice } from '@reduxjs/toolkit';
import { BankRate } from '../api/api';

interface InitialState {
  allRates: BankRate[] | [],
  chosenCurrency2: string,
  value1: string,
  value2: string,
}

const initialState: InitialState = {
  allRates: [],
  chosenCurrency2: 'USD',
  value1: '',
  value2: '',
};

const currencyReducer = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setAllRates: (state, action) => ({
      ...state,
      allRates: action.payload,
    }),

    setChosenCurrency2: (state, action) => ({
      ...state,
      chosenCurrency2: action.payload,
    }),

    setValue1: (state, action) => ({
      ...state,
      value1: action.payload,
    }),

    setValue2: (state, action) => ({
      ...state,
      value2: action.payload,
    }),
  },
});

export const selectors = {
  getAllRates: (state: InitialState) => state.allRates,
  getChosenCurrency2: (state: InitialState) => state.chosenCurrency2,
  getValue1: (state: InitialState) => state.value1,
  getValue2: (state: InitialState) => state.value2,
};

export const {
  setAllRates,
  setChosenCurrency2,
  setValue1,
  setValue2,
} = currencyReducer.actions;

export const { reducer } = currencyReducer;
