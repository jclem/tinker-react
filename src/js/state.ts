import React from 'react'

export type State = {
  value: string
}

export type Action = {
  type: 'update'
  value: string
}

export function initialize(): State {
  return {value: ''}
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'update':
      return {...state, value: action.value}
    default:
      return state
  }
}

export const StateContext = React.createContext<{
  dispatch: React.Dispatch<Action>
  state: State
}>(null as any) // eslint-disable-line @typescript-eslint/no-explicit-any
