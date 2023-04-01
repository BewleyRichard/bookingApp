/* This handles the main search bar. An initial state that includes an undefined city, an empty array for dates, 
and undefined options for adults, children, and rooms. 
The SearchContextProvider uses useReducer to set the state of the search context 
and provides the state and dispatch function to the context value. 
The SearchReducer handles two actions: NEW_SEARCH, which sets the state to a new search payload, 
and RESET_SEARCH, which resets the state to the initial state. */

import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};