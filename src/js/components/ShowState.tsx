import React, {useContext} from 'react'
import {StateContext} from '../state'

export default function ShowState() {
  const {state, dispatch} = useContext(StateContext)

  return (
    <div>
      <p>State value: {state.value}</p>

      <input
        type="text"
        onInput={e =>
          dispatch({
            type: 'update',
            value: e.currentTarget.value
          })
        }
      />
    </div>
  )
}
