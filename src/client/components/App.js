import React from 'react'
import Header from './Header'
import StackInfo from './StackInfo'
import Portfolio from '../containers/Portfolio'
import Process from './Process'

const App = () => (
    <div>
        <Header />
        <Portfolio />
        <Process />
        <StackInfo />
    </div>
)

export default App