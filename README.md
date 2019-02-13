# Redux
Learning Redux by actually implementing it.

## Study

Strongly recommend the following video, which makes it easy to better understand the inner idea of Redux.

### Basic Princeple
1. Single data source. Only one global store to keep the application state
2. Read-only state. The only way to change the state is to emit an `action`, an object describing what happened.
3. All changes are made by pure function. Pure `reducer` is responsible to create a new state based on previousState and `action`.

### Commonly Used API (Part of, not all)

#### Top Level API
1. createStore(reducer): create a store 
2. combineReducers(reducers): combine several reducers into a single one

#### Store API
1. getState(): get current state
2. dispatch(action): emit a action to store
3. subscribe(listener): subscribe a listener, which will be called once any action is dispatched

### Data flow
1. UI is rendered according to current state
2. New state is created by reducers
3. reducers are called when actions are dispatched
4. Actions are dispatched when UI receives users' behaviour

## Reference

[Get Started with Redux](https://www.bilibili.com/video/av7643390)
