import React from 'react'
import { render } from 'react-dom'
import Redam from './redam.js'
import Redux from './redux.js'
import Undux from './undux.js'
import Unistore from './unistore.js'

const margin = '10px 0px 20px'

render(
  <div style={{ maxWidth: 500, margin: 'auto', textAlign: 'center' }}>
    <Redam {...{ margin }} />
    <Redux {...{ margin }} />
    <Undux {...{ margin }} />
    <Unistore {...{ margin }} />
  </div>,
  document.getElementById('app')
)