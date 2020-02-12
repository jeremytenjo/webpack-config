import React from 'react'
import ReactDOM from 'react-dom'

import './body.css'
import './span.css'
import './fonts/roboto.woff2'
import './fonts/montserrat.woff2'
import registerServiceWorker from './registerServiceWorker'
import Comp from './testComponent/comp.index'

registerServiceWorker()
ReactDOM.render(<Comp />, document.getElementById('root'))
