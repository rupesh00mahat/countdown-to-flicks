import React, { createContext, useReducer, useState } from 'react'
const MovieContext = createContext();

const movieContextReducer = (state, action) =>{
    return {url: '', movieList: []};
}

function MovieContextProvider({children}) {
    const [state, dispatch] = useReducer(movieContextReducer, {url: '', movieList: [] });

  return (
    <MovieContext.Provider value={{state, dispatch}}>
        {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider