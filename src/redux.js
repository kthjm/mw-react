import React from 'react'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

const store = createStore((state = { count: 0 }, action) =>
  Object.assign({}, state,
    action.type === 'COUNT_UP' ? { count: state.count + 1 } :
    action.type === 'COUNT_DOWN' ? { count: state.count - 1 } :
    undefined
  )
)

const Consumer = connect(
  state => ({ count: state.count }),
  dispatch => ({ onCountClick: (type) => dispatch({ type }) })
)(
  ({ margin, count, onCountClick }) =>
  <div style={{ margin }}>
    <h1>redux</h1>
    <h2>{count}</h2>
    <button onClick={() => onCountClick('COUNT_UP')}>+</button>
    <button onClick={() => onCountClick('COUNT_DOWN')}>-</button>
  </div>
)

export default (props) =>
<Provider {...{ store }}>
  <Consumer {...props} />
</Provider>