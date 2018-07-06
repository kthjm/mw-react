import React from 'react'
import { connect, createStore } from 'undux'

export default connect(
  createStore({ count: 0 })
)(
  ({ margin, store }) =>
  <div style={{ margin }}>
    <h1>undux</h1>
    <h2>{store.get('count')}</h2>
    <button onClick={() => store.set('count')(store.get('count') + 1)}>+</button>
    <button onClick={() => store.set('count')(store.get('count') - 1)}>-</button>
  </div>
)