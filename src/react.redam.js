import React from 'react'
import Redam from 'redam'

export default Redam(
  { count: 0 },
  {
    COUNT_UP: ({ state, setState }) =>
      state('count').then(count => setState({ count: count + 1 })),
    COUNT_DOWN: ({ state, setState }) =>
      state('count').then(count => setState({ count: count - 1 }))
  },
  ({ margin, provided }) =>
  <div style={{ margin }}>
    <h1>redam</h1>
    <h2>{provided.state.count}</h2>
    <button onClick={() => provided.dispatch('COUNT_UP')}>+</button>
    <button onClick={() => provided.dispatch('COUNT_DOWN')}>-</button>
  </div>
)