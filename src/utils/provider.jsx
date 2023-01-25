import { useContext, useReducer, createContext } from 'react'
import React from 'react'
import { reducer } from './reducer';

export const Statecontext = createContext()

export const Provider = ({initialState,reducer,children}) => (
    <Statecontext.Provider value={useReducer(reducer,initialState)} >
      {children}
    </Statecontext.Provider>
);

export const useCreateContext = () => useContext(Statecontext)