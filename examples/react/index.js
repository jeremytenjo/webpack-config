import React from 'react'
import ReactDOM from 'react-dom'
require('offline-plugin/runtime').install()

import './body.css'
import './span.css'
import './fonts/roboto.woff2'
import './fonts/montserrat.woff2'
import Comp from './testComponent/comp.index'
ReactDOM.render(<Comp />, document.getElementById('root'))
