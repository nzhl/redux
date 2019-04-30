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


### React-Redux
Using props to pass store explicitly => Using provider/context to pass store implicitly ( This brings quite a log redudant template code ) => To remove those template code => That's where React-Redux plays a role !!!

connect: (mapStateToProps, mapDispatchToProps) => PresentationalComponent => LogicComponent
  + mapStateToProps: (stateFromStore, ownProps?) => dataToPropsMap
  + mapDispatchToProps 
    - function: (dispatch) => <props, () => dispatch(action)>map
    - object: <props, () => action>map
    
### React-Redux-Thunk
After using middleware to enhance redux's dispatch function, actions which can only be plain JavasSript object is no longer limited by this rule. You are free to pass an action which is a function in this form
  ```js
  // action can be a function
  (dispatch) => {
  
    // give user a hint to wait
    dispatch({
      type: REQUEST_SENT
    })
    
    return fetch('api-address').then((data) => {
      // remove the waiting hint and update the page
      dispatch({
        type: RESPONSE_RECEIVED,
        payload: data
      })
    })
  }
  ```
  
  思考: 实际不引入thunk仅仅利用mapDispatchToProps的函数形式, 也能实现异步, 那么为什么我们还需要react-redux-thunk?
  详见: https://codesandbox.io/s/pp55734v5q?fontsize=14
  解释: http://www.xiaojichao.com/post/why-do-we-need-middleware-for-async-flow-in-redux.html


## Reference

[Get Started with Redux](https://www.bilibili.com/video/av7643390) -- 原作者的视频

[Vuex、Flux、Redux、Redux-saga、Dva、MobX](https://zhuanlan.zhihu.com/p/53599723) -- 可着重看关于redux处理异步的部分
