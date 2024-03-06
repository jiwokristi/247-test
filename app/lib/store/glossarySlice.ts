import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  words: { word: string; frequency: number }[];
  raw: string;
};

const initialState: InitialState = {
  words: [],
  raw: '',
};

const glossarySlice = createSlice({
  name: 'glossary',
  initialState,
  reducers: {
    onChange: (state, action: PayloadAction<string>) => {
      state.raw = action.payload;
    },
    submitGlossary: (
      state,
      action: PayloadAction<{ word: string; frequency: number }[]>,
    ) => {
      state.words = action.payload;
    },
    deleteWord: (state, action: PayloadAction<string>) => {
      state.words = state.words.filter(({ word }) => word !== action.payload);
      state.raw = state.raw
        .split(' ')
        .filter(word => word.toLowerCase() !== action.payload)
        .join(' ');
    },
  },
});

export const { onChange, submitGlossary, deleteWord } = glossarySlice.actions;
export default glossarySlice.reducer;
