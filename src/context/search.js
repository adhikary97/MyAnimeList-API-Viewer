import { createContext } from 'react';

export const SearchContext = createContext({
  animeData: [],
  singleData: {},
  search: () => {},
  setData: () => {},
  setSingle: () => {},
});
