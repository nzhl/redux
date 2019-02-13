const createStore = reducer => {
  let state
  let listeners = []

  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener)

    // return a function which can be used to unsubscribe listener
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  // init store
  dispatch({})

  return { getState, dispatch, subscribe }
}

const combineReducers = (reducers) => {
  // return a root reducer
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key], action
        )
        return nextState
      },
      {}
    )
  }
}

export { createStore, combineReducers }
