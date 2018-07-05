import React from 'react'
import createStore from 'unistore'
import { Provider, connect } from 'unistore/react'

const store = createStore({ count: 0 })

const Consumer = connect(['count'], {
  countUp: ({ count }) => ({ count: count + 1 }),
  countDown: ({ count }) => ({ count: count - 1})
})(
  ({ margin, count, countUp, countDown }) =>
  <div style={{ margin }}>
    <h1>unistore</h1>
    <h2>{count}</h2>
    <button onClick={countUp}>+</button>
    <button onClick={countDown}>-</button>
  </div>
)

export default (props) =>
<Provider {...{ store }}>
  <Consumer {...props} />
</Provider>