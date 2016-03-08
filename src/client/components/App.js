import React from 'react'
import Header from './Header'
import TechStack from '../containers/TechStack'
import Portfolio from '../containers/Portfolio'
import Process from './Process'

const App = () => (
    <div>
        <Header />
        <Portfolio />
        <Process />
        <TechStack />
    </div>
)

export default App