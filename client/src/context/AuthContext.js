/* This variable contains an initial state with user, loading, and error attributes,
as well as an AuthReducer function that handles state updates based on various action types.
It also exports an AuthContextProvider function that creates a context provider with 
the AuthReducer and initial state. The provider wraps children components and provides them with user, 
loading, error, and dispatch attributes that correspond to the AuthContext state and reducer. 
The provider also saves the current user to localStorage using useEffect. */

import { createContext, useEffect, useReducer } from "react";


const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
        return  {
            user: null,
            loading: true,
            error: null,
        };
    case "LOGIN_SUCCESS":
        return  {
            user: action.payload,
            loading: false,
            error: null,
        };
    case "LOGIN_FAILURE":
        return  {
            user: null,
            loading: false,
            error: action.payload,
        };
    case "LOGOUT":
        return  {
            user: null,
            loading: false,
            error: null,
        };
    default:
        return state;
    }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect (()=>{
    console.log(state.user)
    localStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};