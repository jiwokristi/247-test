import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { calculateFrequency } from '../helpers/format';

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
    submitGlossary: (state, action: PayloadAction<string>) => {
      state.words = calculateFrequency(action.payload.split(' ')).sort(
        (a, b) => {
          const wordA = a.word;
          const wordB = b.word;

          if (wordA < wordB) {
            return -1;
          }
          if (wordA > wordB) {
            return 1;
          }
          return 0;
        },
      );
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
