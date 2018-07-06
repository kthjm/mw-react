import React from 'react'
import { render } from 'react-dom'
import Redam from './react.redam.js'
import Redux from './react.redux.js'
import Undux from './react.undux.js'
import Unistore from './react.unistore.js'
import { margin, appStyle } from './.var.js'

render(
  <div style={appStyle}>
    <Redam {...{ margin }} />
    <Redux {...{ margin }} />
    <Undux {...{ margin }} />
    <Unistore {...{ margin }} />
  </div>,
  document.getElementById('react')
)