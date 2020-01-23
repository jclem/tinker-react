import React, {useReducer} from 'react'
import {initialize, reducer, StateContext} from '../state'
import ShowState from './ShowState'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialize())

  return (
    <div className="App">
      <StateContext.Provider value={{state, dispatch}}>
        <h1>Hello, world.</h1>

        <ShowState />

        <style jsx>{`
          h1 {
            color: blue;
          }
        `}</style>
      </StateContext.Provider>
    </div>
  )
}
