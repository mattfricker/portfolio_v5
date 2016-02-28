import React from 'react'
import styleable from 'react-styleable'
import PortfolioItem from './PortfolioItem'

import css from '../styles/components/portfolioInfo.css';

const PortfolioInfo = ( {css, items }) => (
    <div className={css.root}>
        <h2 className={css.header}> Recent Work </h2>
        {items.map((item) => 
            <PortfolioItem
                title={item.title}
                link={item.link}
                description={item.description}
                image={item.image}
                status={item.status}
            />
        )}
    </div>
)

export default styleable(css)(PortfolioInfo)