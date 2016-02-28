import React from 'react'
import PortfolioItem from './PortfolioItem'

const PortfolioInfo = ({text}) => (
    <div>
        <h2> Recent Work </h2>
        <PortfolioItem text={text}/>
    </div>
)

export default PortfolioInfo